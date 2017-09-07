import Entity from 'Classes/Entity';
import Drawable from 'Interfaces/Drawable';

export default class Player extends Entity implements Drawable{
  constructor(info){
    super(info);
  }

  draw(ctx){
    const [x, y] = this.position;
    ctx.beginPath();
    ctx.ellipse(x, y, 10, 10, 0, 0, Math.PI*2);
    ctx.stroke();
  }
}
