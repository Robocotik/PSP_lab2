const block = document.querySelector('.move');
let angle = 0; 
let posX = 0;
let posY = 0; 
let speedX = 2;
let speedY = 2;

function update() {
  
  angle += 2;
  block.style.transform = `rotate(${angle}deg)`; 

  
  posX += speedX;
  posY += speedY;

  
  if (posX + block.offsetWidth > window.innerWidth || posX < 0) {
    speedX = -speedX; 
  }
  if (posY + block.offsetHeight > window.innerHeight || posY < 0) {
    speedY = -speedY; 
  }


  block.style.left = posX + 'px';
  block.style.top = posY + 'px';

  requestAnimationFrame(update); 
}

update(); 
