// Blockchain UI Components for Fare Calculator
class BlockchainUI {
    constructor() {
        this.walletManager = walletManager;
        this.demoWallet = demoWallet;
        this.storageManager = storageManager;
        this.pointsSystem = pointsSystem;
        this.isInitialized = false;
    }

    // Initialize blockchain UI
    init() {
        this.createWalletSection();
        this.createTransactionHistory();
        this.createTokenBalance();
        this.createExportImportSection();
        this.updateWalletStatus();
        this.updatePointsDisplay();
        this.updateStorageStats();
        this.isInitialized = true;
    }

    // Create wallet connection section
    createWalletSection() {
        const walletSection = document.createElement('div');
        walletSection.className = 'blockchain-section';
        walletSection.innerHTML = `
            <div class="blockchain-header">
                <h3>🔗 Blockchain Integration</h3>
                <div class="wallet-status" id="walletStatus">
                    <span class="status-indicator disconnected"></span>
                    <span class="status-text">Wallet Not Connected</span>
                </div>
            </div>
            
            <div class="points-display" id="pointsDisplay">
                <div class="points-info">
                    <span class="points-icon">⭐</span>
                    <span class="points-label">Points:</span>
                    <span class="points-value" id="currentPoints">1000</span>
                </div>
                <div class="points-breakdown" id="pointsBreakdown">
                    <div class="breakdown-item">
                        <span class="label">Used:</span>
                        <span class="value" id="pointsUsed">0</span>
                    </div>
                    <div class="breakdown-item">
                        <span class="label">Earned:</span>
                        <span class="value" id="pointsEarned">0</span>
                    </div>
                </div>
            </div>
            
            <div class="wallet-actions" id="walletActions">
                <button id="connectWalletBtn" class="btn btn-blockchain" onclick="connectDemoWallet()">
                    🔗 Connect Demo Wallet
                </button>
                <button id="disconnectWalletBtn" class="btn btn-secondary" onclick="disconnectDemoWallet()" style="display: none;">
                    🚫 Disconnect
                </button>
                <button id="addPointsBtn" class="btn btn-small" onclick="addDemoPoints()" style="display: none;">
                    ⭐ Add Points
                </button>
            </div>

            <div class="wallet-info" id="walletInfo" style="display: none;">
                <div class="info-item">
                    <span class="label">Address:</span>
                    <span class="value" id="walletAddress">-</span>
                </div>
                <div class="info-item">
                    <span class="label">Network:</span>
                    <span class="value" id="walletNetwork">-</span>
                </div>
                <div class="info-item">
                    <span class="label">Balance:</span>
                    <span class="value" id="walletBalance">-</span>
                </div>
                <div class="info-item">
                    <span class="label">FARE Tokens:</span>
                    <span class="value" id="tokenBalance">-</span>
                </div>
            </div>

            <div class="network-selector" id="networkSelector" style="display: none;">
                <label for="networkSelect">Select Network:</label>
                <select id="networkSelect" onchange="switchNetwork(this.value)">
                    <option value="ethereum">Ethereum</option>
                    <option value="polygon">Polygon</option>
                    <option value="binance">Binance Smart Chain</option>
                    <option value="arbitrum">Arbitrum</option>
                    <option value="optimism">Optimism</option>
                </select>
            </div>
        `;

        // Insert after the map section
        const mapContainer = document.getElementById('mapContainer');
        if (mapContainer && mapContainer.parentNode) {
            mapContainer.parentNode.insertBefore(walletSection, mapContainer.nextSibling);
        }
    }

    // Create transaction history section
    createTransactionHistory() {
        const historySection = document.createElement('div');
        historySection.className = 'blockchain-section';
        historySection.innerHTML = `
            <div class="blockchain-header">
                <h3>📋 Transaction History</h3>
                <button id="refreshHistoryBtn" class="btn btn-small" onclick="refreshTransactionHistory()">
                    🔄 Refresh
                </button>
            </div>
            
            <div class="transaction-history" id="transactionHistory">
                <div class="no-transactions">
                    <p>No transactions yet. Connect your wallet and calculate fares to see your history.</p>
                </div>
            </div>
        `;

        // Insert after wallet section
        const walletSection = document.querySelector('.blockchain-section');
        if (walletSection) {
            walletSection.insertAdjacentElement('afterend', historySection);
        }
    }

    // Create token balance section
    createTokenBalance() {
        const balanceSection = document.createElement('div');
        balanceSection.className = 'blockchain-section';
        balanceSection.innerHTML = `
            <div class="blockchain-header">
                <h3>💰 Token Balance</h3>
            </div>
            
            <div class="token-balance" id="tokenBalanceSection">
                <div class="token-item">
                    <span class="token-icon">🚗</span>
                    <span class="token-name">FARE Token</span>
                    <span class="token-amount" id="fareTokenAmount">0</span>
                </div>
                <div class="token-item">
                    <span class="token-icon">🪙</span>
                    <span class="token-name">USDT</span>
                    <span class="token-amount" id="usdtAmount">0</span>
                </div>
                <div class="token-item">
                    <span class="token-icon">💵</span>
                    <span class="token-name">USDC</span>
                    <span class="token-amount" id="usdcAmount">0</span>
                </div>
            </div>
        `;

        // Insert after transaction history
        const historySection = document.querySelectorAll('.blockchain-section')[1];
        if (historySection) {
            historySection.insertAdjacentElement('afterend', balanceSection);
        }
    }

    // Create export/import section
    createExportImportSection() {
        const exportSection = document.createElement('div');
        exportSection.className = 'blockchain-section';
        exportSection.innerHTML = `
            <div class="blockchain-header">
                <h3>📁 Data Management</h3>
            </div>
            
            <div class="export-import-actions">
                <div class="action-group">
                    <h4>Export Data</h4>
                    <div class="button-group">
                        <button class="btn btn-small" onclick="exportAllData('json')">
                            📄 Export All (JSON)
                        </button>
                        <button class="btn btn-small" onclick="exportTransactions('csv')">
                            📊 Export Transactions (CSV)
                        </button>
                        <button class="btn btn-small" onclick="exportPointsHistory('csv')">
                            ⭐ Export Points History (CSV)
                        </button>
                        <button class="btn btn-small" onclick="createGitHubBackup()">
                            🐙 GitHub Backup
                        </button>
                    </div>
                </div>
                
                <div class="action-group">
                    <h4>Import Data</h4>
                    <div class="import-section">
                        <input type="file" id="importFile" accept=".json,.csv" style="display: none;" onchange="importDataFromFile(this)">
                        <button class="btn btn-small" onclick="document.getElementById('importFile').click()">
                            📥 Import Data
                        </button>
                        <button class="btn btn-small" onclick="clearAllData()">
                            🗑️ Clear All Data
                        </button>
                    </div>
                </div>
                
                <div class="action-group">
                    <h4>Storage Info</h4>
                    <div class="storage-stats" id="storageStats">
                        <!-- Stats will be populated here -->
                    </div>
                </div>
            </div>
        `;

        // Insert after token balance
        const balanceSection = document.querySelectorAll('.blockchain-section')[2];
        if (balanceSection) {
            balanceSection.insertAdjacentElement('afterend', exportSection);
        }
    }

    // Update wallet status
    updateWalletStatus() {
        const walletStatus = document.getElementById('walletStatus');
        const walletActions = document.getElementById('walletActions');
        const walletInfo = document.getElementById('walletInfo');
        const networkSelector = document.getElementById('networkSelector');
        const connectBtn = document.getElementById('connectWalletBtn');
        const disconnectBtn = document.getElementById('disconnectWalletBtn');

        if (walletConnection.connected) {
            // Update status indicator
            const statusIndicator = walletStatus.querySelector('.status-indicator');
            const statusText = walletStatus.querySelector('.status-text');
            
            statusIndicator.className = 'status-indicator connected';
            statusText.textContent = 'Wallet Connected';

            // Show wallet info
            document.getElementById('walletAddress').textContent = blockchainUtils.formatAddress(walletConnection.address);
            document.getElementById('walletNetwork').textContent = blockchainConfig.networks[walletConnection.network]?.name || 'Unknown';
            document.getElementById('walletBalance').textContent = `${walletConnection.balance} ETH`;

            // Show/hide buttons
            connectBtn.style.display = 'none';
            disconnectBtn.style.display = 'inline-block';
            walletInfo.style.display = 'block';
            networkSelector.style.display = 'block';

            // Update network selector
            const networkSelect = document.getElementById('networkSelect');
            if (networkSelect) {
                networkSelect.value = walletConnection.network;
            }

        } else {
            // Update status indicator
            const statusIndicator = walletStatus.querySelector('.status-indicator');
            const statusText = walletStatus.querySelector('.status-text');
            
            statusIndicator.className = 'status-indicator disconnected';
            statusText.textContent = 'Wallet Not Connected';

            // Hide wallet info
            connectBtn.style.display = 'inline-block';
            disconnectBtn.style.display = 'none';
            walletInfo.style.display = 'none';
            networkSelector.style.display = 'none';
        }
    }

    // Update transaction history
    async updateTransactionHistory() {
        const historyContainer = document.getElementById('transactionHistory');
        
        if (!walletConnection.connected) {
            historyContainer.innerHTML = `
                <div class="no-transactions">
                    <p>Connect your wallet to view transaction history.</p>
                </div>
            `;
            return;
        }

        try {
            const transactions = await this.walletManager.getTransactionHistory();
            
            if (transactions.length === 0) {
                historyContainer.innerHTML = `
                    <div class="no-transactions">
                        <p>No transactions yet. Calculate a fare to create your first transaction!</p>
                    </div>
                `;
                return;
            }

            historyContainer.innerHTML = transactions.map(tx => `
                <div class="transaction-item" data-hash="${tx.hash}">
                    <div class="transaction-header">
                        <span class="transaction-hash">${tx.hash.slice(0, 10)}...</span>
                        <span class="transaction-status ${tx.status}">${blockchainConfig.statuses[tx.status] || tx.status}</span>
                    </div>
                    <div class="transaction-details">
                        <div class="detail-item">
                            <span class="label">Route:</span>
                            <span class="value">${tx.origin} → ${tx.destination}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Fare:</span>
                            <span class="value">${tx.fare} ${tx.currency}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Distance:</span>
                            <span class="value">${tx.distance} km</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Time:</span>
                            <span class="value">${new Date(tx.timestamp * 1000).toLocaleString()}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Gas Fee:</span>
                            <span class="value">${tx.transactionFee.toFixed(6)} ETH</span>
                        </div>
                    </div>
                    <div class="transaction-actions">
                        <button class="btn btn-small" onclick="viewTransaction('${tx.hash}')">
                            👁️ View Details
                        </button>
                        <button class="btn btn-small" onclick="copyTransactionHash('${tx.hash}')">
                            📋 Copy Hash
                        </button>
                    </div>
                </div>
            `).join('');

        } catch (error) {
            historyContainer.innerHTML = `
                <div class="error-message">
                    <p>Error loading transaction history: ${error.message}</p>
                </div>
            `;
        }
    }

    // Update token balances
    async updateTokenBalances() {
        if (!this.demoWallet.isConnected) {
            document.getElementById('fareTokenAmount').textContent = '0';
            document.getElementById('usdtAmount').textContent = '0';
            document.getElementById('usdcAmount').textContent = '0';
            return;
        }

        try {
            const fareBalance = this.demoWallet.getCurrentPoints();
            document.getElementById('fareTokenAmount').textContent = fareBalance;
            document.getElementById('tokenBalance').textContent = `${fareBalance} FARE`;
            
            // Mock other token balances
            document.getElementById('usdtAmount').textContent = '1,250.50';
            document.getElementById('usdcAmount').textContent = '500.00';

        } catch (error) {
            console.error('Error updating token balances:', error);
        }
    }

    // Update points display
    updatePointsDisplay() {
        const currentPoints = this.storageManager.getUserPoints();
        const breakdown = this.pointsSystem.getPointsBreakdown();
        
        document.getElementById('currentPoints').textContent = currentPoints;
        document.getElementById('pointsUsed').textContent = breakdown.totalUsed;
        document.getElementById('pointsEarned').textContent = breakdown.totalEarned;
    }

    // Update storage statistics
    updateStorageStats() {
        const stats = this.storageManager.getStorageStats();
        const statsContainer = document.getElementById('storageStats');
        
        if (statsContainer) {
            statsContainer.innerHTML = `
                <div class="stat-item">
                    <span class="label">Total Transactions:</span>
                    <span class="value">${stats.totalTransactions}</span>
                </div>
                <div class="stat-item">
                    <span class="label">Wallet Connections:</span>
                    <span class="value">${stats.totalWalletConnections}</span>
                </div>
                <div class="stat-item">
                    <span class="label">Current Points:</span>
                    <span class="value">${stats.currentPoints}</span>
                </div>
                <div class="stat-item">
                    <span class="label">Storage Size:</span>
                    <span class="value">${(stats.storageSize / 1024).toFixed(2)} KB</span>
                </div>
                <div class="stat-item">
                    <span class="label">Last Updated:</span>
                    <span class="value">${stats.lastUpdated}</span>
                </div>
            `;
        }
    }

    // Show transaction modal
    showTransactionModal(transaction) {
        const modal = document.createElement('div');
        modal.className = 'transaction-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Transaction Details</h3>
                    <button class="close-btn" onclick="closeTransactionModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="transaction-detail">
                        <span class="label">Transaction Hash:</span>
                        <span class="value">${transaction.hash}</span>
                    </div>
                    <div class="transaction-detail">
                        <span class="label">From:</span>
                        <span class="value">${blockchainUtils.formatAddress(transaction.from)}</span>
                    </div>
                    <div class="transaction-detail">
                        <span class="label">To:</span>
                        <span class="value">${blockchainUtils.formatAddress(transaction.to)}</span>
                    </div>
                    <div class="transaction-detail">
                        <span class="label">Route:</span>
                        <span class="value">${transaction.origin} → ${transaction.destination}</span>
                    </div>
                    <div class="transaction-detail">
                        <span class="label">Fare:</span>
                        <span class="value">${transaction.fare} ${transaction.currency}</span>
                    </div>
                    <div class="transaction-detail">
                        <span class="label">Gas Used:</span>
                        <span class="value">${transaction.gasUsed.toLocaleString()}</span>
                    </div>
                    <div class="transaction-detail">
                        <span class="label">Transaction Fee:</span>
                        <span class="value">${transaction.transactionFee.toFixed(6)} ETH</span>
                    </div>
                    <div class="transaction-detail">
                        <span class="label">Status:</span>
                        <span class="value status-${transaction.status}">${blockchainConfig.statuses[transaction.status] || transaction.status}</span>
                    </div>
                    <div class="transaction-detail">
                        <span class="label">Timestamp:</span>
                        <span class="value">${new Date(transaction.timestamp * 1000).toLocaleString()}</span>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" onclick="viewOnExplorer('${transaction.hash}')">
                        🔍 View on Explorer
                    </button>
                    <button class="btn btn-secondary" onclick="closeTransactionModal()">
                        Close
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    }

    // Show loading state
    showLoading(message = 'Processing...') {
        const loading = document.createElement('div');
        loading.className = 'blockchain-loading';
        loading.innerHTML = `
            <div class="loading-content">
                <div class="loading-spinner"></div>
                <p>${message}</p>
            </div>
        `;
        document.body.appendChild(loading);
    }

    // Hide loading state
    hideLoading() {
        const loading = document.querySelector('.blockchain-loading');
        if (loading) {
            loading.remove();
        }
    }

    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span class="notification-icon">${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.remove()">&times;</button>
        `;

        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }
}

// Global blockchain UI instance
const blockchainUI = new BlockchainUI();

// Blockchain UI functions
async function connectWallet() {
    blockchainUI.showLoading('Connecting wallet...');
    
    try {
        const result = await walletManager.connectWallet();
        
        if (result.success) {
            blockchainUI.updateWalletStatus();
            blockchainUI.updateTokenBalances();
            blockchainUI.updateTransactionHistory();
            blockchainUI.showNotification('Wallet connected successfully!', 'success');
        } else {
            blockchainUI.showNotification(`Failed to connect wallet: ${result.error}`, 'error');
        }
    } catch (error) {
        blockchainUI.showNotification(`Error connecting wallet: ${error.message}`, 'error');
    } finally {
        blockchainUI.hideLoading();
    }
}

async function disconnectWallet() {
    walletManager.disconnectWallet();
    blockchainUI.updateWalletStatus();
    blockchainUI.updateTokenBalances();
    blockchainUI.updateTransactionHistory();
    blockchainUI.showNotification('Wallet disconnected', 'info');
}

async function switchNetwork(network) {
    try {
        const result = await walletManager.switchNetwork(network);
        if (result.success) {
            blockchainUI.updateWalletStatus();
            blockchainUI.showNotification(`Switched to ${blockchainConfig.networks[network].name}`, 'success');
        }
    } catch (error) {
        blockchainUI.showNotification(`Failed to switch network: ${error.message}`, 'error');
    }
}

async function refreshTransactionHistory() {
    blockchainUI.showLoading('Refreshing transaction history...');
    await blockchainUI.updateTransactionHistory();
    blockchainUI.hideLoading();
}

function viewTransaction(hash) {
    const transaction = fareCalculatorContract.transactions.get(hash);
    if (transaction) {
        blockchainUI.showTransactionModal(transaction);
    }
}

function copyTransactionHash(hash) {
    navigator.clipboard.writeText(hash).then(() => {
        blockchainUI.showNotification('Transaction hash copied to clipboard!', 'success');
    });
}

function viewOnExplorer(hash) {
    const network = walletConnection.network;
    const explorerUrl = blockchainConfig.networks[network]?.explorerUrl;
    if (explorerUrl) {
        window.open(explorerUrl + hash, '_blank');
    }
}

function closeTransactionModal() {
    const modal = document.querySelector('.transaction-modal');
    if (modal) {
        modal.remove();
    }
}

// Demo wallet functions
async function connectDemoWallet() {
    blockchainUI.showLoading('Connecting demo wallet...');
    
    try {
        const result = demoWallet.connect();
        
        if (result.success) {
            walletConnection.connected = true;
            walletConnection.address = result.address;
            walletConnection.balance = result.balance;
            walletConnection.network = 'ethereum';
            
            blockchainUI.updateWalletStatus();
            blockchainUI.updateTokenBalances();
            blockchainUI.updateTransactionHistory();
            blockchainUI.updatePointsDisplay();
            blockchainUI.showNotification('Demo wallet connected! Earned 50 points!', 'success');
        } else {
            blockchainUI.showNotification(`Failed to connect wallet: ${result.error}`, 'error');
        }
    } catch (error) {
        blockchainUI.showNotification(`Error connecting wallet: ${error.message}`, 'error');
    } finally {
        blockchainUI.hideLoading();
    }
}

async function disconnectDemoWallet() {
    demoWallet.disconnect();
    walletConnection.connected = false;
    walletConnection.address = null;
    walletConnection.balance = 0;
    walletConnection.network = null;
    
    blockchainUI.updateWalletStatus();
    blockchainUI.updateTokenBalances();
    blockchainUI.updateTransactionHistory();
    blockchainUI.updatePointsDisplay();
    blockchainUI.showNotification('Demo wallet disconnected', 'info');
}

async function addDemoPoints() {
    const amount = 100;
    const newPoints = demoWallet.addPoints(amount, 'Demo reward');
    blockchainUI.updatePointsDisplay();
    blockchainUI.updateStorageStats();
    blockchainUI.showNotification(`Added ${amount} points! Total: ${newPoints}`, 'success');
}

// Export/Import functions
function exportAllData(format) {
    const result = exportImportManager.exportAllData(format);
    exportImportManager.downloadFile(result.data, result.filename);
    blockchainUI.showNotification(`Exported all data as ${result.filename}`, 'success');
}

function exportTransactions(format) {
    const result = exportImportManager.exportTransactions(format);
    exportImportManager.downloadFile(result.data, result.filename);
    blockchainUI.showNotification(`Exported ${result.count} transactions as ${result.filename}`, 'success');
}

function exportPointsHistory(format) {
    const result = exportImportManager.exportPointsHistory(format);
    exportImportManager.downloadFile(result.data, result.filename);
    blockchainUI.showNotification(`Exported points history as ${result.filename}`, 'success');
}

function createGitHubBackup() {
    const result = exportImportManager.createGitHubBackup();
    exportImportManager.downloadFile(result.data, result.filename);
    blockchainUI.showNotification(`GitHub backup created: ${result.filename}`, 'success');
}

function importDataFromFile(input) {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const result = exportImportManager.importData(e.target.result, file.name.endsWith('.csv') ? 'csv' : 'json');
        
        if (result.success) {
            blockchainUI.updateTransactionHistory();
            blockchainUI.updatePointsDisplay();
            blockchainUI.updateStorageStats();
            blockchainUI.showNotification('Data imported successfully!', 'success');
        } else {
            blockchainUI.showNotification(`Import failed: ${result.message}`, 'error');
        }
    };
    reader.readAsText(file);
}

function clearAllData() {
    if (confirm('Are you sure you want to clear all data? This cannot be undone.')) {
        storageManager.clearAllData();
        blockchainUI.updateTransactionHistory();
        blockchainUI.updatePointsDisplay();
        blockchainUI.updateStorageStats();
        blockchainUI.showNotification('All data cleared', 'info');
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BlockchainUI, blockchainUI };
}
