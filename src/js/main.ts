import {
  Bodies,
  Body,
  Engine,
  Render,
  Vector,
  World,
} from 'matter-js';
import clampedPoint from './clampedPoint';

const canvas: HTMLCanvasElement = document.querySelector('canvas');

// create an engine
const engine = Engine.create();
engine.world.gravity.y = 0;

// create a renderer
const render = Render.create({
    canvas,
    engine
});

const down = Vector.create(0, .003);
// create two boxes and a ground
const player = Bodies.circle(410, 200, 20);
const boxB = Bodies.rectangle(400, 50, 20, 20);

player.restitution = 1;
boxB.restitution = 1;
Body.applyForce(boxB, boxB.position, down);
const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
World.add(engine.world, [player, boxB, ground]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
