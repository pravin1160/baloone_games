let gameOver = false; // Flag to stop interactions when the game ends
let score = 0;

// Create 50 bubbles
MakeBubble(50);

function MakeBubble(box) {
    for (let i = 0; i < box; i++) {
        var col = getRandomColor();
        var btn = document.createElement("button");
        btn.id = "bubble" + i; // Use unique IDs from bubble0 to bubble49
        btn.className = "bubble";
        btn.style = "background-color:" + col;
        document.body.appendChild(btn);
    }
}

// Add click events for all 50 bubbles
for (let i = 0; i < 50; i++) { // Correct range to include all bubbles
    let id = "bubble" + i; // IDs match with the created bubbles
    document.getElementById(id).onclick = (evt) => {
        if (gameOver) return; // Prevent interaction if game is over

        if (evt.target.style.visibility === 'hidden') {
            return; // Prevent double scoring for the same bubble
        }

        evt.target.style.visibility = 'hidden'; // Hide the clicked bubble
        score += 1; // Increment score
        console.log(`Score: ${score}`);
        document.getElementById('score_final').innerHTML = score; // Update score display
    };
}

// Countdown timer
var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function () {
    seconds--;
    document.getElementById("countdown").textContent = seconds;

    if (seconds === 0) {
        clearInterval(countdown); // Stop the timer
        gameOver = true; // End the game
        alert("TimeOut! Your score -> " + score); // Show final score
    }
}, 1000);

// Generate random colors
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
