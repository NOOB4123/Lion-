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
// Your existing JavaScript code remains here

// Add the new customization functions

// Change background color
function changeBackgroundColor() {
    const bgColor = document.getElementById('bgColor').value;
    document.body.style.backgroundColor = bgColor;
    localStorage.setItem('bgColor', bgColor);  // Save the choice in localStorage
}

// Change button colors
function changeButtonColor() {
    const btnColor = document.getElementById('btnColor').value;
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.backgroundColor = btnColor;
    });
    localStorage.setItem('btnColor', btnColor);  // Save the choice in localStorage
}

// Change the lion image
function changeLionImage() {
    const file = document.getElementById('lionImage').files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('lion').src = event.target.result;
            localStorage.setItem('lionImage', event.target.result);  // Save the choice in localStorage
        };
        reader.readAsDataURL(file);  // Read the image file as a data URL
    }
}

// Reset customization to default values
function resetCustomization() {
    localStorage.removeItem('bgColor');
    localStorage.removeItem('btnColor');
    localStorage.removeItem('lionImage');
    location.reload();  // Reload the page to reset the styles
}

// Apply saved customization on load
window.onload = function() {
    // Apply saved background color
    if (localStorage.getItem('bgColor')) {
        document.body.style.backgroundColor = localStorage.getItem('bgColor');
        document.getElementById('bgColor').value = localStorage.getItem('bgColor');
    }
    
    // Apply saved button color
    if (localStorage.getItem('btnColor')) {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.style.backgroundColor = localStorage.getItem('btnColor');
        });
        document.getElementById('btnColor').value = localStorage.getItem('btnColor');
    }
    
    // Apply saved lion image
    if (localStorage.getItem('lionImage')) {
        document.getElementById('lion').src = localStorage.getItem('lionImage');
    }
};
