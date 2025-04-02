document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');

    // Create the grid cells
    for (let i = 0; i < 64; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
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
        if (index >= 8) {
            return grid.children[index - 8];
        }
        return cell;
    }

    function moveDown(cell) {
        const index = Array.from(grid.children).indexOf(cell);
        if (index < 56) {
            return grid.children[index + 8];
        }
        return cell;
    }

    function moveLeft(cell) {
        const index = Array.from(grid.children).indexOf(cell);
        if (index % 8 !== 0) {
            return grid.children[index - 1];
        }
        return cell;
    }

    function moveRight(cell) {
        const index = Array.from(grid.children).indexOf(cell);
        if (index % 8 !== 7) {
            return grid.children[index + 1];
        }
        return cell;
    }
});