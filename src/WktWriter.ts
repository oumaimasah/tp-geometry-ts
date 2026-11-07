import Geometry from "./Geometry";
import Point from "./Point";
import LineString from "./LineString";

export default class WktWriter {
    write(geometry: Geometry): string {
        if (geometry instanceof Point) {
            if (geometry.isEmpty()) {
                return "POINT EMPTY";
            }
            return "POINT(" + this.coord(geometry) + ")";
        } else if (geometry instanceof LineString) {
            if (geometry.isEmpty()) {
                return "LINESTRING EMPTY";
            }
            const coords: string[] = [];
            for (let i = 0; i < geometry.getNumPoints(); i++) {
                coords.push(this.coord(geometry.getPointN(i)));
            }
            return "LINESTRING(" + coords.join(",") + ")";
        } else {
            throw new TypeError("geometry type not supported");
        }
    }

    private coord(p: Point): string {
        return this.num(p.x()) + " " + this.num(p.y());
    }

    private num(n: number): string {
        return Number.isInteger(n) ? n.toFixed(1) : String(n);
    }
}