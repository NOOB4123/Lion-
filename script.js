// Starting coin count
let coins = 0;

// Function to increase coins when lion is tapped
function mineCoins() {
    coins += 1; // Increment coins by 1
    document.getElementById('coinCount').textContent = coins; // Update coin count display
}
