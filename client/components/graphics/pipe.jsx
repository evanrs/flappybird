import debug from 'debug';
import React from 'react';

const log = debug('graphics:pipe');

class PipeGraphicsComponent {
    constructor(entity) {
        this.entity = entity;
    }

    draw(context) {
        // let {x, y} = this.entity.components.physics.position;
        context.save();
        // context.translate(x, y);
        context.fillStyle = "blue";
        context.fillRect(0, 0, 0.05, 0.45);
        context.restore();
    }
}

export {PipeGraphicsComponent}
