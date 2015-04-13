import {random} from 'lodash/number';

let alternate = 0;

class PipePhysicsComponent {
    constructor(entity) {
        alternate = !alternate;
        this.entity = entity;
        this.position = {x: 1 * random(1, 1.05), y: alternate ? 0.6 : 0};
        this.velocity = {x: -0.25, y: 0};
        this.acceleration = {x: 0, y: 0};
    }

    update(delta) {
        const {velocity, acceleration, position} = this;

        velocity.x += acceleration.x * delta;
        velocity.y += acceleration.y * delta;

        position.x += velocity.x * delta;
        position.y += velocity.y * delta;
    }
}

export {PipePhysicsComponent}
