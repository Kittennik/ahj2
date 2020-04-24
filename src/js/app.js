function playGame(boardSize) {
  const board = document.getElementById('board-container');
  for (let i = 0; i < boardSize; i += 1) {
    const itemBoard = document.createElement('div');
    itemBoard.className = 'field';
    itemBoard.id = `field${i}`;
    board.appendChild(itemBoard);
  }
  setInterval(() => {
    const imgPosition = Math.floor(Math.random() * boardSize);
    const imgField = document.getElementById(`field${imgPosition}`);
    const clear = document.querySelector('img.goblin');
    if (clear) clear.parentNode.innerHTML = '';
    imgField.innerHTML = '<img class="goblin" src="goblin.png">';
  }, 1000);
}

playGame(16);
