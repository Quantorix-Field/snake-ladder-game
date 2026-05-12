// Game variables
let player1Pos = 0;
let player2Pos = 0;
let currentPlayer = 1;
let gameOver = false;

// Snakes: key is head, value is tail
const snakes = {
    17: 4,
    54: 31,
    62: 18,
    87: 36,
    93: 73,
    99: 79
};

// Ladders: key is bottom, value is top
const ladders = {
    3: 22,
    5: 14,
    9: 31,
    20: 38,
    32: 42,
    51: 67,
    72: 91,
    78: 98
};

// Initialize the game board
function initializeBoard() {
    const board = document.getElementById('game-board');
    board.innerHTML = '';
    
    // Create cells from 100 down to 1 (reverse order for snake and ladder style)
    const cells = [];
    for (let i = 100; i >= 1; i--) {
        cells.push(i);
    }
    
    cells.forEach((cellNum, index) => {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `cell-${cellNum}`;
        
        // Add cell number
        const cellNumber = document.createElement('span');
        cellNumber.className = 'cell-number';
        cellNumber.textContent = cellNum;
        cell.appendChild(cellNumber);
        
        // Add snake or ladder
        if (snakes[cellNum]) {
            cell.classList.add('snake');
        }
        if (ladders[cellNum]) {
            cell.classList.add('ladder');
        }
        
        board.appendChild(cell);
    });
    
    updatePlayerPositions();
}

// Roll the dice
function rollDice(player) {
    if (gameOver || player !== currentPlayer) {
        return;
    }
    
    const diceValue = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice-value').textContent = diceValue;
    
    // Move the current player
    if (player === 1) {
        player1Pos += diceValue;
        if (player1Pos > 100) {
            player1Pos = 100;
        }
        checkSnakesAndLadders(1);
    } else {
        player2Pos += diceValue;
        if (player2Pos > 100) {
            player2Pos = 100;
        }
        checkSnakesAndLadders(2);
    }
    
    // Check for winner
    if (player1Pos === 100) {
        endGame('Player 1');
        return;
    }
    if (player2Pos === 100) {
        endGame('Player 2');
        return;
    }
    
    updatePlayerPositions();
    
    // Switch player if dice is not 6
    if (diceValue !== 6) {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
    } else {
        document.getElementById('status').textContent = `Player ${currentPlayer} rolled a 6! Roll again!`;
        updateButtonStates();
        return;
    }
    
    updateButtonStates();
}

// Check for snakes and ladders
function checkSnakesAndLadders(player) {
    let position = player === 1 ? player1Pos : player2Pos;
    
    // Check snake
    if (snakes[position]) {
        position = snakes[position];
        if (player === 1) {
            player1Pos = position;
        } else {
            player2Pos = position;
        }
        showMessage(`Player ${player} hit a snake! Down to ${position}`);
    }
    
    // Check ladder
    if (ladders[position]) {
        position = ladders[position];
        if (player === 1) {
            player1Pos = position;
        } else {
            player2Pos = position;
        }
        showMessage(`Player ${player} found a ladder! Up to ${position}`);
    }
}

// Update player positions on the board
function updatePlayerPositions() {
    // Clear all player indicators
    document.querySelectorAll('.cell').forEach(cell => {
        cell.classList.remove('player1', 'player2');
    });
    
    // Place players
    if (player1Pos > 0) {
        const cell = document.getElementById(`cell-${player1Pos}`);
        if (cell) cell.classList.add('player1');
    }
    
    if (player2Pos > 0) {
        const cell = document.getElementById(`cell-${player2Pos}`);
        if (cell) cell.classList.add('player2');
    }
    
    // Update position displays
    document.getElementById('player1-pos').textContent = player1Pos;
    document.getElementById('player2-pos').textContent = player2Pos;
    
    // Update status
    if (!gameOver) {
        document.getElementById('status').textContent = `Player ${currentPlayer}'s Turn`;
    }
}

// Update button states
function updateButtonStates() {
    const player1Btn = document.getElementById('player1-btn');
    const player2Btn = document.getElementById('player2-btn');
    
    if (currentPlayer === 1) {
        player1Btn.classList.add('active');
        player2Btn.classList.remove('active');
        player1Btn.disabled = false;
        player2Btn.disabled = true;
    } else {
        player1Btn.classList.remove('active');
        player2Btn.classList.add('active');
        player1Btn.disabled = true;
        player2Btn.disabled = false;
    }
}

// Show temporary message
function showMessage(message) {
    const status = document.getElementById('status');
    status.textContent = message;
}

// End game
function endGame(winner) {
    gameOver = true;
    document.getElementById('status').textContent = `🎉 ${winner} Wins! 🎉`;
    document.getElementById('player1-btn').disabled = true;
    document.getElementById('player2-btn').disabled = true;
}

// Reset game
function resetGame() {
    player1Pos = 0;
    player2Pos = 0;
    currentPlayer = 1;
    gameOver = false;
    document.getElementById('dice-value').textContent = '-';
    updatePlayerPositions();
    updateButtonStates();
}

// Initialize the game when page loads
window.addEventListener('DOMContentLoaded', () => {
    initializeBoard();
    updateButtonStates();
});
