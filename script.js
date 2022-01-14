const grid = document.getElementById('grid');
for (let i = 0; i < 21; i++) {
  let row = document.createElement('tr');
  grid.appendChild(row);
  for (let j = 0; j < 21; j++) {
    let space = document.createElement('td');
    space.classList.add('space');
    row.appendChild(space);
  }
}