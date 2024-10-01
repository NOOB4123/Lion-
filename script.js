// Starting score
let score = 0;

// Function to increase score when coin is tapped
function tapCoin() {
    score++; // Increment score by 1
    document.getElementById('score').textContent = score; // Update score display
}