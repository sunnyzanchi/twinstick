import Entity from 'Classes/Entity';
import Drawable from 'Interfaces/Drawable';

export default class Bullet extends Entity implements Drawable{
  constructor(info){
    super(info);
  }

  draw(ctx){
    const [x, y] = this.position;
    ctx.beginPath();
    ctx.ellipse(x, y, 3, 3, 0, 0, Math.PI*2);
    ctx.fill();
  }
}
