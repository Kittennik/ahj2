function playGame(boardSize) {
  if (typeof document !== 'undefined') {
    const board = document.getElementById('board-container');
    for (let i = 0; i < boardSize; i += 1) {
      const itemBoard = document.createElement('div');
      itemBoard.className = 'field';
      itemBoard.id = `field${i}`;
      board.appendChild(itemBoard);
    }
    let index = 0;
    setInterval(() => {
      let imgPosition = Math.floor(Math.random() * boardSize);
      if (imgPosition === index) {
        imgPosition += 1;
        if (imgPosition === boardSize) {
          imgPosition = 0;
        }
      }
      const imgField = document.getElementById(`field${imgPosition}`);
      const clear = document.querySelector('img.goblin');
      if (clear) clear.parentNode.innerHTML = '';
      imgField.innerHTML = '<img class="goblin" src="goblin.png">';
      index = imgPosition;
    }, 1000);
  }
}

playGame(16);
