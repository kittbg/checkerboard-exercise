const colors = ['black', 'red', 'blue', 'green', 'yellow'];
// Create container element
const container = document.createElement('div');
container.style.width = '800px';
container.style.margin = 'auto'

for (var i = 0; i < 81; i++){
let tile = document.createElement('div');
tile.classList.add('tile')
tile.style.width = '11.1%';
tile.style.paddingBottom = '11.1%';
tile.style.float = 'left'

const randomIndex = Math.floor(Math.random() * colors.length);

// if ((Math.floor(i / 81) + i) % 2 === 0) {
  if (i % 2 === 0) {
    tile.style.backgroundColor = colors[randomIndex];
  } else {
    tile.style.backgroundColor = colors[(randomIndex + 1) % colors.length];
  }

 // Append tile to container
 container.appendChild(tile);
}
 
// Append container to parent element
document.body.appendChild(container);

