document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("grid");
    const gridSizeButton = document.getElementById("gridSizeButton");
    let filledCells = 0; // Counter to track filled cells
    let totalCells = 0; // Total number of cells in the grid

    // Function to create the grid
    function createGrid(gridSize) {
        grid.innerHTML = ""; // Clear existing grid
        filledCells = 0; // Reset filled cells counter
        totalCells = gridSize * gridSize;

        for (let i = 0; i < totalCells; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            // Add hover effect
            cell.addEventListener("mouseover", () => {
                if (!cell.classList.contains("hovered")) {
                    cell.classList.add("hovered");
                    cell.style.backgroundColor = "blue"; // Leave blue after hover
                    filledCells++;

                    // Check if all cells are filled
                    if (filledCells === totalCells) {
                        startBlinking();
                    }
                }
            });

            grid.appendChild(cell);
        }

        // Update grid styles dynamically
        grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    }

    // Function to make the entire grid blink
    function startBlinking() {
        setInterval(() => {
            const cells = document.querySelectorAll(".cell");
            cells.forEach((cell) => {
                const randomColor = Math.random() > 0.5
                    ? `rgb(0, ${Math.floor(Math.random() * 256)}, 0)` // Random green
                    : `rgb(0, 0, ${Math.floor(Math.random() * 256)})`; // Random blue
                cell.style.backgroundColor = randomColor;
            });
        }, 500); // Adjust blinking interval as needed
    }

    // Event listener for grid size button
    gridSizeButton.addEventListener("click", () => {
        let gridSize = parseInt(prompt("Enter grid size (must be a multiple of 16):"), 10);

        // Validate input
        if (isNaN(gridSize) || gridSize % 16 !== 0 || gridSize <= 0) {
            alert("Invalid input! Please enter a positive multiple of 16.");
            return;
        }

        createGrid(gridSize);
    });

    // Create default 16x16 grid on page load
    createGrid(16);
});