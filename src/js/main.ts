import Player from 'Classes/Player';
import Bullet from 'Classes/Bullet';

import clampedPoint from './clampedPoint';

const canvas: HTMLCanvasElement = document.querySelector('canvas');
const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

const entities = new Set;
const player = new Player({
  position: [200, 200],
  mass: 10,
  drag: .8
})
entities.add(player);

const threshold = function threshold(amount: number){
  return Math.abs(amount) > .2 ? amount : 0;
}

const render = function render(): void{
  ctx.clearRect(0, 0, 400, 400);

  for(let i of entities){
    i.draw(ctx);
    i.update();
  }

  const gp = navigator.getGamepads()[0];
  if(gp){
    player.velocity[0] += threshold(gp.axes[0]);
    player.velocity[1] += threshold(gp.axes[1]);
  }

  requestAnimationFrame(render);
}

render();

window.addEventListener('keydown', function(e){
  if(e.repeat) return;

  switch(e.key){
    case 'a': return player.velocity[0] -= 5;
    case 'd': return player.velocity[0] += 5;
    case 'w': return player.velocity[1] -= 5;
    case 's': return player.velocity[1] += 5;
  }
});

canvas.addEventListener('click', function(e){
  entities.add(new Bullet({
    drag: .99,
    mass: 1,
    position: [player.position[0], player.position[1]],
    velocity: clampedPoint(10, player.position, [e.x, e.y]),
  }));
});
