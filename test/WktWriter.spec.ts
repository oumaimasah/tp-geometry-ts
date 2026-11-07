import { describe, it, expect } from "vitest";
import WktWriter from "../src/WktWriter";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test WktWriter", () => {
    const writer = new WktWriter();

    it("point vide", () => {
        expect(writer.write(new Point())).to.equal("POINT EMPTY");
    });

    it("point", () => {
        expect(writer.write(new Point([3.0, 4.0]))).to.equal("POINT(3.0 4.0)");
    });

    it("polyligne vide", () => {
        expect(writer.write(new LineString())).to.equal("LINESTRING EMPTY");
    });

    it("polyligne", () => {
        const l = new LineString([
            new Point([0.0, 0.0]),
            new Point([1.0, 1.0]),
            new Point([5.0, 5.0]),
        ]);
        expect(writer.write(l)).to.equal("LINESTRING(0.0 0.0,1.0 1.0,5.0 5.0)");
    });
});