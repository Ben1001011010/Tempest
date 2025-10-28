// Export/Import functionality for GitHub storage
class ExportImportManager {
    constructor() {
        this.storageManager = storageManager;
        this.exportFormats = ['json', 'csv', 'txt'];
    }

    // Export all data
    exportAllData(format = 'json') {
        const data = this.storageManager.exportData(format);
        const filename = `fare_calculator_data_${this.getTimestamp()}.${format}`;
        
        return {
            data: data,
            filename: filename,
            format: format,
            size: data.length
        };
    }

    // Export transactions only
    exportTransactions(format = 'json') {
        const transactions = this.storageManager.getTransactions();
        const data = format === 'json' 
            ? JSON.stringify(transactions, null, 2)
            : this.storageManager.convertToCSV({ transactions });
        
        const filename = `transactions_${this.getTimestamp()}.${format}`;
        
        return {
            data: data,
            filename: filename,
            format: format,
            count: transactions.length
        };
    }

    // Export wallet connections
    exportWalletConnections(format = 'json') {
        const connections = this.storageManager.getWalletConnections();
        const data = format === 'json'
            ? JSON.stringify(connections, null, 2)
            : this.convertConnectionsToCSV(connections);
        
        const filename = `wallet_connections_${this.getTimestamp()}.${format}`;
        
        return {
            data: data,
            filename: filename,
            format: format,
            count: connections.length
        };
    }

    // Export points history
    exportPointsHistory(format = 'json') {
        const transactions = this.storageManager.getTransactions();
        const pointsHistory = transactions.map(tx => ({
            timestamp: tx.timestamp,
            type: tx.type || 'fare_calculation',
            pointsChange: tx.pointsUsed ? -tx.pointsUsed : (tx.amount || 0),
            reason: tx.reason || 'Fare calculation',
            origin: tx.origin,
            destination: tx.destination
        }));

        const data = format === 'json'
            ? JSON.stringify(pointsHistory, null, 2)
            : this.convertPointsToCSV(pointsHistory);
        
        const filename = `points_history_${this.getTimestamp()}.${format}`;
        
        return {
            data: data,
            filename: filename,
            format: format,
            count: pointsHistory.length
        };
    }

    // Create GitHub-ready backup
    createGitHubBackup() {
        const backup = {
            metadata: {
                version: '1.0.0',
                created: new Date().toISOString(),
                totalTransactions: this.storageManager.getTransactions().length,
                totalConnections: this.storageManager.getWalletConnections().length,
                currentPoints: this.storageManager.getUserPoints()
            },
            data: this.storageManager.exportData('json'),
            statistics: this.storageManager.getStorageStats()
        };

        return {
            data: JSON.stringify(backup, null, 2),
            filename: `github_backup_${this.getTimestamp()}.json`,
            description: 'Complete backup of Fare Calculator data for GitHub storage'
        };
    }

    // Import data from file
    importData(fileData, format = 'json') {
        try {
            let parsedData;
            
            if (format === 'json') {
                parsedData = JSON.parse(fileData);
            } else if (format === 'csv') {
                parsedData = this.parseCSV(fileData);
            } else {
                throw new Error('Unsupported format');
            }

            // Validate data structure
            if (this.validateImportData(parsedData)) {
                const result = this.storageManager.importData(JSON.stringify(parsedData));
                return result;
            } else {
                return {
                    success: false,
                    message: 'Invalid data structure'
                };
            }
        } catch (error) {
            return {
                success: false,
                message: 'Error importing data: ' + error.message
            };
        }
    }

    // Validate imported data
    validateImportData(data) {
        return data && 
               typeof data === 'object' && 
               Array.isArray(data.transactions) &&
               Array.isArray(data.walletConnections) &&
               typeof data.userPoints === 'number';
    }

    // Convert connections to CSV
    convertConnectionsToCSV(connections) {
        if (connections.length === 0) return 'No wallet connections to export';

        const headers = ['ID', 'Address', 'Network', 'Balance', 'Points Earned', 'Timestamp'];
        const rows = connections.map(conn => [
            conn.id,
            conn.address,
            conn.network,
            conn.balance,
            conn.pointsEarned,
            new Date(conn.timestamp).toISOString()
        ]);

        return [headers, ...rows].map(row => row.join(',')).join('\n');
    }

    // Convert points to CSV
    convertPointsToCSV(pointsHistory) {
        if (pointsHistory.length === 0) return 'No points history to export';

        const headers = ['Timestamp', 'Type', 'Points Change', 'Reason', 'Origin', 'Destination'];
        const rows = pointsHistory.map(point => [
            new Date(point.timestamp).toISOString(),
            point.type,
            point.pointsChange,
            point.reason,
            point.origin || '',
            point.destination || ''
        ]);

        return [headers, ...rows].map(row => row.join(',')).join('\n');
    }

    // Parse CSV data
    parseCSV(csvData) {
        const lines = csvData.split('\n');
        const headers = lines[0].split(',');
        const rows = lines.slice(1).map(line => {
            const values = line.split(',');
            const obj = {};
            headers.forEach((header, index) => {
                obj[header.trim()] = values[index] ? values[index].trim() : '';
            });
            return obj;
        });

        return {
            transactions: rows.filter(row => row.Type === 'fare_calculation'),
            walletConnections: rows.filter(row => row.Type === 'wallet_connection'),
            userPoints: 1000 // Default starting points
        };
    }

    // Get timestamp for filenames
    getTimestamp() {
        return new Date().toISOString().replace(/[:.]/g, '-').split('T')[0];
    }

    // Download file
    downloadFile(data, filename, mimeType = 'application/json') {
        const blob = new Blob([data], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    // Create storage summary for GitHub README
    createStorageSummary() {
        const stats = this.storageManager.getStorageStats();
        const pointsBreakdown = pointsSystem.getPointsBreakdown();
        
        return `# Fare Calculator Storage Summary

## 📊 Statistics
- **Total Transactions**: ${stats.totalTransactions}
- **Wallet Connections**: ${stats.totalWalletConnections}
- **Current Points**: ${stats.currentPoints}
- **Total Points Used**: ${stats.totalPointsUsed}
- **Total Points Earned**: ${stats.totalPointsEarned}
- **Last Updated**: ${stats.lastUpdated}

## 📁 Files
- \`backup_${this.getTimestamp()}.json\` - Complete data backup
- \`transactions_${this.getTimestamp()}.csv\` - Transaction history
- \`wallet_connections_${this.getTimestamp()}.json\` - Wallet connection history
- \`points_history_${this.getTimestamp()}.csv\` - Points usage history

## 🔧 Usage
1. Import any of these files to restore data
2. JSON files contain complete data structure
3. CSV files are human-readable and can be opened in Excel
4. All timestamps are in ISO format

## 📈 Points System
- **Current Balance**: ${pointsBreakdown.current} points
- **Net Change**: ${pointsBreakdown.netChange > 0 ? '+' : ''}${pointsBreakdown.netChange} points
- **Usage Rate**: ${((pointsBreakdown.totalUsed / (pointsBreakdown.totalUsed + pointsBreakdown.totalEarned)) * 100).toFixed(1)}%

---
*Generated on ${new Date().toLocaleString()}*
`;
    }
}

// Global export/import manager
const exportImportManager = new ExportImportManager();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ExportImportManager, exportImportManager };
}
