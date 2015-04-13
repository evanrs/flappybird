import debug from 'debug';
import React from 'react';

const log = debug('graphics:pipe');

class PipeGraphicsComponent {
    constructor(entity) {
        this.entity = entity;
    }

    draw(context) {
        let {x, y} = this.entity.components.physics.position;
        context.save();
        context.fillStyle = "blue";
        context.fillRect(x, y, 0.05, 0.45);
        context.translate(x, y);
        context.restore();
        log(x, y);
    }
}

export {PipeGraphicsComponent}
