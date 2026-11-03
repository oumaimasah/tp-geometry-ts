import Geometry from "./Geometry";
import Point from "./Point";

export default class LineString implements Geometry {
    private points: Point[];

    constructor(points: Point[] = []) {
        this.points = points;
    }

    getType(): string {
        return "LineString";
    }

    getNumPoints(): number {
        return this.points.length;
    }

    getPointN(n: number): Point {
        return this.points[n];
    }
    isEmpty(): boolean {
        return this.points.length === 0;
    }
    translate(dx: number, dy: number): void {
        for (const point of this.points) {
            point.translate(dx, dy);
        }
    }
    clone(): LineString {
        const newPoints = [];
        for (const point of this.points) {
            newPoints.push(point.clone());
        }
        return new LineString(newPoints);
    }
}
