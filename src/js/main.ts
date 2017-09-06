import Player from 'Classes/Player';

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
    const [x, y] = i.position;
    ctx.ellipse(x, y, 10, 10, 0, 0, Math.PI * 2);
    ctx.stroke();

    i.update();
  }
  const gp = navigator.getGamepads()[0];
  player.velocity[0] += threshold(gp.axes[0]);
  player.velocity[1] += threshold(gp.axes[1]);

  requestAnimationFrame(render);
}

render();
