class SpawnSystem {
    constructor(entities, Model, interval=1000, count=1) {
        this.entities = entities;
        this.Model = Model;
        this.interval = interval;
    }

    run() {
        this.tick();
        this._interval =
            global.setInterval(this.tick.bind(this), this.interval);
    }

    tick() {
        (new Array(this.count)).forEach(
            () => this.entities.push(new this.Model()));
    }
}

export {SpawnSystem}
