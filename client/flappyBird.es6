import {GraphicsSystem} from 'systems/graphics';
import {PhysicsSystem} from 'systems/physics';
import {InputSystem} from 'systems/input';
import {SpawnSystem} from 'systems/spawn';
import {Bird} from 'entities/bird';
import {Pipe} from 'entities/pipe';

class FlappyBird {
    constructor() {
        this.entities = [new Bird()];
        this.graphics = new GraphicsSystem(this.entities);
        this.physics = new PhysicsSystem(this.entities);
        this.input = new InputSystem(this.entities);
        this.spawn = new SpawnSystem(this.entities, Pipe, 2000, 2);
    }

    run() {
        this.graphics.run();
        this.physics.run();
        this.input.run();
        this.spawn.run();
    }
}

export {FlappyBird};
