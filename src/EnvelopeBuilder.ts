import Coordinate from "./Coordinate";
import Envelope from "./Envelope";


export default class EnvelopeBuilder {
    private xMin = Number.POSITIVE_INFINITY;
    private yMin = Number.POSITIVE_INFINITY;
    private xMax = Number.NEGATIVE_INFINITY;
    private yMax = Number.NEGATIVE_INFINITY;

    insert(coordinate: Coordinate): void {
        if (coordinate.length < 2) {
            return;
        }
        const [x, y] = coordinate;
        this.xMin = Math.min(this.xMin, x);
        this.yMin = Math.min(this.yMin, y);
        this.xMax = Math.max(this.xMax, x);
        this.yMax = Math.max(this.yMax, y);
    }

    build(): Envelope {
        if (this.xMin === Number.POSITIVE_INFINITY) {
            return new Envelope();
        }
        return new Envelope(this.xMin, this.yMin, this.xMax, this.yMax);
    }
}
