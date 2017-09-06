type Vector = [number, number];
type EntityInfo = {
  acceleration?: Vector,
  drag: number,
  mass: number,
  position: Vector,
  velocity?: Vector
}

export default abstract class Entity{
  acceleration: Vector;
  drag: number;
  mass: number;
  position: Vector;
  velocity: Vector;

  constructor(info: EntityInfo){
    this.acceleration = info.acceleration || [0, 0];
    this.drag = info.drag;
    this.mass = info.mass;
    this.position = info.position;
    this.velocity = info.velocity || [0, 0];
  }

  update(){
    this.position[0] += this.velocity[0];
    this.position[1] += this.velocity[1];

    this.velocity[0] += this.acceleration[0];
    this.velocity[1] += this.acceleration[1];

    this.velocity[0] *= this.drag;
    this.velocity[1] *= this.drag;
  }
}
