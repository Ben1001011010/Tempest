// Blockchain Configuration for Fare Calculator
const blockchainConfig = {
    // Network configurations
    networks: {
        'ethereum': {
            name: 'Ethereum',
            symbol: 'ETH',
            chainId: 1,
            rpcUrl: 'https://mainnet.infura.io/v3/YOUR_PROJECT_ID',
            explorerUrl: 'https://etherscan.io/tx/',
            gasPrice: 20, // Gwei
            currency: 'ETH'
        },
        'polygon': {
            name: 'Polygon',
            symbol: 'MATIC',
            chainId: 137,
            rpcUrl: 'https://polygon-rpc.com',
            explorerUrl: 'https://polygonscan.com/tx/',
            gasPrice: 30, // Gwei
            currency: 'MATIC'
        },
        'binance': {
            name: 'Binance Smart Chain',
            symbol: 'BNB',
            chainId: 56,
            rpcUrl: 'https://bsc-dataseed.binance.org',
            explorerUrl: 'https://bscscan.com/tx/',
            gasPrice: 5, // Gwei
            currency: 'BNB'
        },
        'arbitrum': {
            name: 'Arbitrum One',
            symbol: 'ETH',
            chainId: 42161,
            rpcUrl: 'https://arb1.arbitrum.io/rpc',
            explorerUrl: 'https://arbiscan.io/tx/',
            gasPrice: 0.1, // Gwei
            currency: 'ETH'
        },
        'optimism': {
            name: 'Optimism',
            symbol: 'ETH',
            chainId: 10,
            rpcUrl: 'https://mainnet.optimism.io',
            explorerUrl: 'https://optimistic.etherscan.io/tx/',
            gasPrice: 0.001, // Gwei
            currency: 'ETH'
        }
    },

    // Smart contract addresses (simulated)
    contracts: {
        'FareCalculator': {
            address: '0x1234567890abcdef1234567890abcdef12345678',
            abi: [
                {
                    "inputs": [
                        {"name": "origin", "type": "string"},
                        {"name": "destination", "type": "string"},
                        {"name": "distance", "type": "uint256"},
                        {"name": "fare", "type": "uint256"},
                        {"name": "currency", "type": "string"}
                    ],
                    "name": "calculateFare",
                    "outputs": [
                        {"name": "calculatedFare", "type": "uint256"},
                        {"name": "transactionHash", "type": "bytes32"}
                    ],
                    "stateMutability": "payable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {"name": "transactionId", "type": "bytes32"}
                    ],
                    "name": "getTransaction",
                    "outputs": [
                        {
                            "name": "origin",
                            "type": "string"
                        },
                        {
                            "name": "destination", 
                            "type": "string"
                        },
                        {
                            "name": "fare",
                            "type": "uint256"
                        },
                        {
                            "name": "timestamp",
                            "type": "uint256"
                        },
                        {
                            "name": "status",
                            "type": "string"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {"name": "userAddress", "type": "address"}
                    ],
                    "name": "getUserTransactions",
                    "outputs": [
                        {
                            "name": "transactions",
                            "type": "bytes32[]"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                }
            ]
        },
        'FareToken': {
            address: '0xabcdef1234567890abcdef1234567890abcdef12',
            abi: [
                {
                    "inputs": [
                        {"name": "to", "type": "address"},
                        {"name": "amount", "type": "uint256"}
                    ],
                    "name": "transfer",
                    "outputs": [{"name": "success", "type": "bool"}],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {"name": "account", "type": "address"}
                    ],
                    "name": "balanceOf",
                    "outputs": [{"name": "balance", "type": "uint256"}],
                    "stateMutability": "view",
                    "type": "function"
                }
            ]
        }
    },

    // Supported tokens for fare payment
    tokens: {
        'USDT': {
            name: 'Tether USD',
            symbol: 'USDT',
            decimals: 6,
            address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', // Ethereum
            logo: '🪙'
        },
        'USDC': {
            name: 'USD Coin',
            symbol: 'USDC',
            decimals: 6,
            address: '0xA0b86a33E6441b8C4C8C0C4C0C4C0C4C0C4C0C4C',
            logo: '💵'
        },
        'DAI': {
            name: 'Dai Stablecoin',
            symbol: 'DAI',
            decimals: 18,
            address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            logo: '🪙'
        },
        'FARE': {
            name: 'Fare Token',
            symbol: 'FARE',
            decimals: 18,
            address: '0x1234567890abcdef1234567890abcdef12345678',
            logo: '🚗'
        }
    },

    // Gas estimation
    gasEstimates: {
        'calculateFare': 150000,
        'getTransaction': 30000,
        'getUserTransactions': 50000,
        'transfer': 21000
    },

    // Transaction statuses
    statuses: {
        'pending': '⏳ Pending',
        'confirmed': '✅ Confirmed',
        'failed': '❌ Failed',
        'cancelled': '🚫 Cancelled'
    },

    // Fee structures
    fees: {
        'network': 0.001, // 0.1% network fee
        'platform': 0.005, // 0.5% platform fee
        'gas': 0.0001 // Gas fee estimate
    }
};

// Wallet connection status
let walletConnection = {
    connected: false,
    address: null,
    network: null,
    balance: 0
};

// Transaction history storage
let transactionHistory = JSON.parse(localStorage.getItem('fareTransactions') || '[]');

// Blockchain utility functions
const blockchainUtils = {
    // Generate transaction hash
    generateTxHash: function() {
        return '0x' + Math.random().toString(16).substr(2, 64);
    },

    // Format address (show first 6 and last 4 characters)
    formatAddress: function(address) {
        if (!address) return 'Not Connected';
        return address.slice(0, 6) + '...' + address.slice(-4);
    },

    // Convert wei to ether
    weiToEther: function(wei) {
        return wei / Math.pow(10, 18);
    },

    // Convert ether to wei
    etherToWei: function(ether) {
        return ether * Math.pow(10, 18);
    },

    // Calculate gas cost
    calculateGasCost: function(gasLimit, gasPrice) {
        return gasLimit * gasPrice / Math.pow(10, 9); // Convert gwei to ether
    },

    // Validate address
    isValidAddress: function(address) {
        return /^0x[a-fA-F0-9]{40}$/.test(address);
    },

    // Get current timestamp
    getCurrentTimestamp: function() {
        return Math.floor(Date.now() / 1000);
    },

    // Generate QR code data for wallet connection
    generateQRData: function() {
        return {
            type: 'wallet_connect',
            timestamp: this.getCurrentTimestamp(),
            app: 'Fare Calculator',
            version: '1.0.0'
        };
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { blockchainConfig, walletConnection, transactionHistory, blockchainUtils };
}
