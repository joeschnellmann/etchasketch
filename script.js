document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("grid");
    const gridSizeButton = document.getElementById("gridSizeButton");

    // Function to create the grid
    function createGrid(gridSize) {
        grid.innerHTML = ""; // Clear existing grid
        const totalCells = gridSize * gridSize;

        for (let i = 0; i < totalCells; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            // Add hover effect
            cell.addEventListener("mouseover", () => {
                const randomGreen = `rgb(0, ${Math.floor(Math.random() * 256)}, 0)`;
                cell.style.backgroundColor = randomGreen;

                // Leave blue after hover
                setTimeout(() => {
                    cell.style.backgroundColor = "blue";
                }, 300);
            });

            grid.appendChild(cell);
        }

        // Update grid styles dynamically
        grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
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