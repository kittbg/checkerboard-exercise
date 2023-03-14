
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

if ((Math.floor(i / 81) + i) % 2 === 0)  {
  tile.style.backgroundColor = 'black';
  } else {
    tile.style.backgroundColor = 'red';
 }

 // Append tile to container
 container.appendChild(tile);
}
 
// Append container to parent element
document.body.appendChild(container);

