export default class Envelope {
    constructor(
        private readonly xMin: number = Number.NaN,
        private readonly yMin: number = Number.NaN,
        private readonly xMax: number = Number.NaN,
        private readonly yMax: number = Number.NaN
    ) {}

    getXMin(): number { return this.xMin; }
    getYMin(): number { return this.yMin; }
    getXMax(): number { return this.xMax; }
    getYMax(): number { return this.yMax; }

    isEmpty(): boolean {
        return Number.isNaN(this.xMin);
    }

    toString(): string {
        return `[${this.xMin},${this.yMin},${this.xMax},${this.yMax}]`;
    }
}
