import debug from 'debug';
const log = debug('entity:pipe');

import {PipeGraphicsComponent} from 'components/graphics/pipe';
import {PipePhysicsComponent} from 'components/physics/pipe';

class Pipe {
    constructor() {
        log("creating");

        this.components = {
            graphics: new PipeGraphicsComponent(this),
            physics: new PipePhysicsComponent(this)
        };
    }
}

export {Pipe}
