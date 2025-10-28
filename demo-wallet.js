// Demo Wallet System with Points Management
class DemoWallet {
    constructor() {
        this.isConnected = false;
        this.address = null;
        this.balance = 0;
        this.points = 1000; // Starting points
        this.transactionHistory = [];
        this.storageManager = storageManager;
    }

    // Connect demo wallet
    connect() {
        this.isConnected = true;
        this.address = this.generateDemoAddress();
        this.balance = Math.random() * 10 + 0.5; // Random balance between 0.5-10.5 ETH
        this.points = this.storageManager.getUserPoints();
        
        // Add wallet connection to storage
        this.storageManager.addWalletConnection({
            address: this.address,
            network: 'ethereum',
            balance: this.balance,
            pointsEarned: 50
        });

        return {
            success: true,
            address: this.address,
            balance: this.balance,
            points: this.points
        };
    }

    // Disconnect demo wallet
    disconnect() {
        this.isConnected = false;
        this.address = null;
        this.balance = 0;
        return { success: true };
    }

    // Generate demo address
    generateDemoAddress() {
        return '0x' + Math.random().toString(16).substr(2, 40);
    }

    // Execute fare calculation with points deduction
    async executeFareCalculation(origin, destination, distance, fare, currency) {
        if (!this.isConnected) {
            throw new Error('Wallet not connected');
        }

        // Calculate points needed
        const pointsNeeded = this.calculatePointsNeeded(distance, fare);
        
        if (this.points < pointsNeeded) {
            throw new Error(`Insufficient points. Need ${pointsNeeded}, have ${this.points}`);
        }

        // Create transaction
        const transaction = {
            hash: this.generateTransactionHash(),
            from: this.address,
            to: 'Fare Calculator Contract',
            origin: origin,
            destination: destination,
            distance: distance,
            fare: fare,
            currency: currency,
            pointsUsed: pointsNeeded,
            gasUsed: 150000,
            gasPrice: 20,
            timestamp: Date.now(),
            status: 'pending'
        };

        // Add to storage
        this.storageManager.addTransaction(transaction);
        
        // Update local points
        this.points -= pointsNeeded;

        // Simulate blockchain confirmation
        setTimeout(() => {
            transaction.status = 'confirmed';
            this.updateTransactionStatus(transaction.hash, 'confirmed');
        }, 2000);

        return {
            success: true,
            transactionHash: transaction.hash,
            pointsUsed: pointsNeeded,
            remainingPoints: this.points
        };
    }

    // Calculate points needed for transaction
    calculatePointsNeeded(distance, fare) {
        const basePoints = 10;
        const distancePoints = Math.ceil(distance * 2);
        const farePoints = Math.ceil(fare / 10);
        return basePoints + distancePoints + farePoints;
    }

    // Generate transaction hash
    generateTransactionHash() {
        return '0x' + Math.random().toString(16).substr(2, 64);
    }

    // Update transaction status
    updateTransactionStatus(hash, status) {
        const transactions = this.storageManager.getTransactions();
        const transaction = transactions.find(tx => tx.hash === hash);
        if (transaction) {
            transaction.status = status;
            this.storageManager.saveData();
        }
    }

    // Get transaction history
    getTransactionHistory() {
        return this.storageManager.getTransactions();
    }

    // Get current points
    getCurrentPoints() {
        return this.storageManager.getUserPoints();
    }

    // Add points (for rewards)
    addPoints(amount, reason = 'Reward') {
        const newPoints = this.storageManager.addPoints(amount, reason);
        this.points = newPoints;
        return newPoints;
    }

    // Get wallet info
    getWalletInfo() {
        return {
            connected: this.isConnected,
            address: this.address,
            balance: this.balance,
            points: this.points,
            transactionCount: this.storageManager.getTransactions().length
        };
    }
}

// Points System
class PointsSystem {
    constructor() {
        this.storageManager = storageManager;
    }

    // Get points breakdown
    getPointsBreakdown() {
        const stats = this.storageManager.getStorageStats();
        return {
            current: stats.currentPoints,
            totalUsed: stats.totalPointsUsed,
            totalEarned: stats.totalPointsEarned,
            netChange: stats.totalPointsEarned - stats.totalPointsUsed
        };
    }

    // Calculate points for different actions
    calculatePoints(action, data = {}) {
        const pointRates = {
            'fare_calculation': (data) => 10 + Math.ceil((data.distance || 0) * 2) + Math.ceil((data.fare || 0) / 10),
            'wallet_connection': () => 50,
            'daily_login': () => 25,
            'referral': () => 100,
            'first_transaction': () => 75,
            'milestone_10_transactions': () => 200,
            'milestone_50_transactions': () => 500
        };

        return pointRates[action] ? pointRates[action](data) : 0;
    }

    // Check for milestones
    checkMilestones() {
        const transactions = this.storageManager.getTransactions();
        const milestones = [];

        if (transactions.length >= 10 && !this.hasMilestone('10_transactions')) {
            milestones.push({
                type: 'milestone_10_transactions',
                points: 200,
                message: 'Congratulations! You\'ve made 10 transactions!'
            });
        }

        if (transactions.length >= 50 && !this.hasMilestone('50_transactions')) {
            milestones.push({
                type: 'milestone_50_transactions',
                points: 500,
                message: 'Amazing! You\'ve made 50 transactions!'
            });
        }

        return milestones;
    }

    // Check if milestone was already awarded
    hasMilestone(milestoneType) {
        const transactions = this.storageManager.getTransactions();
        return transactions.some(tx => tx.type === milestoneType);
    }

    // Award milestone points
    awardMilestone(milestone) {
        this.storageManager.addPoints(milestone.points, milestone.message);
        return milestone;
    }
}

// Global instances
const demoWallet = new DemoWallet();
const pointsSystem = new PointsSystem();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DemoWallet, PointsSystem, demoWallet, pointsSystem };
}
