document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("grid");
    const gridSize = 16; // 16x16 grid

    // Create 16x16 grid (256 cells)
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        // Add hover effect
        cell.addEventListener("mouseover", () => {
            const randomGreen = `rgb(0, ${Math.floor(Math.random() * 256)}, 0)`; // Random green color
            cell.style.backgroundColor = randomGreen;

            // Leave blue after hover
            setTimeout(() => {
                cell.style.backgroundColor = "blue";
            }, 300); // Adjust delay as needed
        });

        grid.appendChild(cell);
    }

    let currentCell = grid.children[0];
    currentCell.classList.add('active');

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        let newCell;

        switch (key) {
            case 'ArrowUp':
                newCell = moveUp(currentCell);
                break;
            case 'ArrowDown':
                newCell = moveDown(currentCell);
                break;
            case 'ArrowLeft':
                newCell = moveLeft(currentCell);
                break;
            case 'ArrowRight':
                newCell = moveRight(currentCell);
                break;
        }

        if (newCell) {
            currentCell.classList.remove('active');
            currentCell = newCell;
            currentCell.classList.add('active');
        }
    });

    function moveUp(cell) {
        const index = Array.from(grid.children).indexOf(cell);
        if (index >= gridSize) {
            return grid.children[index - gridSize];
        }
        return cell;
    }

    function moveDown(cell) {
        const index = Array.from(grid.children).indexOf(cell);
        if (index < gridSize * (gridSize - 1)) {
            return grid.children[index + gridSize];
        }
        return cell;
    }

    function moveLeft(cell) {
        const index = Array.from(grid.children).indexOf(cell);
        if (index % gridSize !== 0) {
            return grid.children[index - 1];
        }
        return cell;
    }

    function moveRight(cell) {
        const index = Array.from(grid.children).indexOf(cell);
        if (index % gridSize !== gridSize - 1) {
            return grid.children[index + 1];
        }
        return cell;
    }
});