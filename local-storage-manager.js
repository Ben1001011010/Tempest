// Local Storage Manager for Blockchain Data
class LocalStorageManager {
    constructor() {
        this.storageKey = 'fareCalculatorData';
        this.data = this.loadData();
        this.storageFolder = 'storage/';
    }

    // Load data from localStorage
    loadData() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            if (stored) {
                return JSON.parse(stored);
            }
        } catch (error) {
            console.error('Error loading data from localStorage:', error);
        }
        
        // Return default data structure
        return {
            transactions: [],
            walletConnections: [],
            userPoints: 1000, // Starting points
            settings: {
                autoSave: true,
                exportFormat: 'json',
                lastBackup: null
            },
            version: '1.0.0',
            lastUpdated: Date.now()
        };
    }

    // Save data to localStorage
    saveData() {
        try {
            this.data.lastUpdated = Date.now();
            localStorage.setItem(this.storageKey, JSON.stringify(this.data));
            return true;
        } catch (error) {
            console.error('Error saving data to localStorage:', error);
            return false;
        }
    }

    // Add transaction
    addTransaction(transaction) {
        const newTransaction = {
            id: this.generateId(),
            ...transaction,
            timestamp: Date.now(),
            pointsUsed: this.calculatePointsUsed(transaction)
        };

        this.data.transactions.push(newTransaction);
        
        // Deduct points
        this.data.userPoints -= newTransaction.pointsUsed;
        
        // Auto-save if enabled
        if (this.data.settings.autoSave) {
            this.saveData();
        }

        return newTransaction;
    }

    // Get all transactions
    getTransactions() {
        return this.data.transactions.sort((a, b) => b.timestamp - a.timestamp);
    }

    // Get transaction by ID
    getTransaction(id) {
        return this.data.transactions.find(tx => tx.id === id);
    }

    // Add wallet connection
    addWalletConnection(connection) {
        const newConnection = {
            id: this.generateId(),
            ...connection,
            timestamp: Date.now(),
            pointsEarned: 50 // Earn points for connecting wallet
        };

        this.data.walletConnections.push(newConnection);
        this.data.userPoints += newConnection.pointsEarned;

        if (this.data.settings.autoSave) {
            this.saveData();
        }

        return newConnection;
    }

    // Get wallet connections
    getWalletConnections() {
        return this.data.walletConnections.sort((a, b) => b.timestamp - a.timestamp);
    }

    // Get user points
    getUserPoints() {
        return this.data.userPoints;
    }

    // Add points (for rewards, etc.)
    addPoints(amount, reason = 'Reward') {
        this.data.userPoints += amount;
        
        // Log the point addition
        this.addTransaction({
            type: 'points_earned',
            amount: amount,
            reason: reason,
            origin: 'System',
            destination: 'User Account'
        });

        if (this.data.settings.autoSave) {
            this.saveData();
        }

        return this.data.userPoints;
    }

    // Calculate points used for a transaction
    calculatePointsUsed(transaction) {
        const basePoints = 10; // Base points for any transaction
        const distanceMultiplier = Math.ceil(transaction.distance || 0);
        const fareMultiplier = Math.ceil((transaction.fare || 0) / 10);
        
        return basePoints + distanceMultiplier + fareMultiplier;
    }

    // Generate unique ID
    generateId() {
        return 'tx_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    // Export data to file
    exportData(format = 'json') {
        const exportData = {
            ...this.data,
            exportDate: new Date().toISOString(),
            totalTransactions: this.data.transactions.length,
            totalWalletConnections: this.data.walletConnections.length
        };

        if (format === 'json') {
            return JSON.stringify(exportData, null, 2);
        } else if (format === 'csv') {
            return this.convertToCSV(exportData);
        }

        return exportData;
    }

    // Convert data to CSV format
    convertToCSV(data) {
        const transactions = data.transactions;
        if (transactions.length === 0) return 'No transactions to export';

        const headers = ['ID', 'Type', 'Origin', 'Destination', 'Distance', 'Fare', 'Currency', 'Points Used', 'Timestamp'];
        const rows = transactions.map(tx => [
            tx.id,
            tx.type || 'fare_calculation',
            tx.origin || '',
            tx.destination || '',
            tx.distance || 0,
            tx.fare || 0,
            tx.currency || '',
            tx.pointsUsed || 0,
            new Date(tx.timestamp).toISOString()
        ]);

        return [headers, ...rows].map(row => row.join(',')).join('\n');
    }

    // Import data from file
    importData(jsonData) {
        try {
            const importedData = JSON.parse(jsonData);
            
            // Validate data structure
            if (importedData.transactions && Array.isArray(importedData.transactions)) {
                this.data = {
                    ...this.data,
                    ...importedData,
                    lastUpdated: Date.now()
                };
                
                this.saveData();
                return { success: true, message: 'Data imported successfully' };
            } else {
                return { success: false, message: 'Invalid data format' };
            }
        } catch (error) {
            return { success: false, message: 'Error parsing imported data: ' + error.message };
        }
    }

    // Clear all data
    clearAllData() {
        this.data = {
            transactions: [],
            walletConnections: [],
            userPoints: 1000,
            settings: {
                autoSave: true,
                exportFormat: 'json',
                lastBackup: null
            },
            version: '1.0.0',
            lastUpdated: Date.now()
        };
        
        this.saveData();
        return true;
    }

    // Get storage statistics
    getStorageStats() {
        return {
            totalTransactions: this.data.transactions.length,
            totalWalletConnections: this.data.walletConnections.length,
            currentPoints: this.data.userPoints,
            totalPointsUsed: this.data.transactions.reduce((sum, tx) => sum + (tx.pointsUsed || 0), 0),
            totalPointsEarned: this.data.transactions
                .filter(tx => tx.type === 'points_earned')
                .reduce((sum, tx) => sum + (tx.amount || 0), 0),
            lastUpdated: new Date(this.data.lastUpdated).toLocaleString(),
            storageSize: JSON.stringify(this.data).length
        };
    }

    // Backup data to file (for GitHub)
    async backupToFile() {
        try {
            const exportData = this.exportData('json');
            const filename = `backup_${new Date().toISOString().split('T')[0]}.json`;
            
            // In a real implementation, this would save to a file
            // For now, we'll return the data and filename
            return {
                success: true,
                filename: filename,
                data: exportData,
                message: 'Backup data ready for download'
            };
        } catch (error) {
            return {
                success: false,
                message: 'Error creating backup: ' + error.message
            };
        }
    }

    // Restore from backup
    async restoreFromBackup(backupData) {
        try {
            const result = this.importData(backupData);
            if (result.success) {
                return {
                    success: true,
                    message: 'Data restored successfully from backup'
                };
            } else {
                return result;
            }
        } catch (error) {
            return {
                success: false,
                message: 'Error restoring backup: ' + error.message
            };
        }
    }
}

// Global storage manager instance
const storageManager = new LocalStorageManager();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LocalStorageManager, storageManager };
}
