// Initial variables
let coins = localStorage.getItem('coins') ? parseInt(localStorage.getItem('coins')) : 0;
let tapPower = localStorage.getItem('tapPower') ? parseInt(localStorage.getItem('tapPower')) : 1;
let autoMiners = localStorage.getItem('autoMiners') ? parseInt(localStorage.getItem('autoMiners')) : 0;
let profitPerHour = localStorage.getItem('profitPerHour') ? parseInt(localStorage.getItem('profitPerHour')) : 0;
let highScore = localStorage.getItem('highScore') ? parseInt(localStorage.getItem('highScore')) : 0;

// Display initial values
document.getElementById('coinCount').textContent = coins;
document.getElementById('tapPower').textContent = tapPower;
document.getElementById('autoMiners').textContent = autoMiners;
document.getElementById('profitPerHour').textContent = profitPerHour;
document.getElementById('highScore').textContent = highScore;

// Function to increase coins by tap
function mineCoins() {
    coins += tapPower;
    updateCoinsDisplay();
    checkHighScore();
    localStorage.setItem('coins', coins);
}

// Function to upgrade tap power
function upgrade() {
    if (coins >= 50) { // Example cost for upgrade
        coins -= 50;
        tapPower += 1;
        document.getElementById('tapPower').textContent = tapPower;
        updateCoinsDisplay();
        localStorage.setItem('tapPower', tapPower);
        localStorage.setItem('coins', coins);
    } else {
        alert("Not enough coins to upgrade!");
    }
}

// Function to buy auto-miners
function buyAutoMiner() {
    if (coins >= 100) { // Example cost for auto-miner
        coins -= 100;
        autoMiners += 1;
        profitPerHour += 600; // 10 coins per minute (600 per hour)
        document.getElementById('autoMiners').textContent = autoMiners;
        document.getElementById('profitPerHour').textContent = profitPerHour;
        updateCoinsDisplay();
        localStorage.setItem('autoMiners', autoMiners);
        localStorage.setItem('profitPerHour', profitPerHour);
        localStorage.setItem('coins', coins);
    } else {
        alert("Not enough coins to buy an auto-miner!");
    }
}

// Auto-miner function
setInterval(() => {
    coins += (autoMiners * 10) / 60; // Auto-miner generates 10 coins per minute
    updateCoinsDisplay();
    checkHighScore();
    localStorage.setItem('coins', Math.floor(coins));
}, 1000); // Update every second

// Update coin display
function updateCoinsDisplay() {
    document.getElementById('coinCount').textContent = Math.floor(coins);
}

// Check for high score and update
function checkHighScore() {
    if (coins > highScore) {
        highScore = coins;
        document.getElementById('highScore').textContent = highScore;
        localStorage.setItem('highScore', highScore);
    }
}

// Wallet connection simulation
function connectWallet() {
    document.getElementById('walletStatus').textContent = "Wallet connected!";
    alert("Wallet connected (simulated)!");
}
