import { describe, it, expect } from "vitest";
import Point from "../src/Point";
import LineString from "../src/LineString"

describe("test LineString", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.equal(undefined);
        expect(Number.isNaN(p.x())).to.be.true;
        expect(Number.isNaN(p.y())).to.be.true;
    });

    it("test constructor with coordinates", () => {
        const g = new LineString([
            new Point([0.0, 0.0]),
            new Point([3.0, 4.0]),
        ]);
    });

    it("should return 'LineString' for getType()", () => {
        const g = new LineString();
        expect(g.getType()).to.equal("LineString");
    });

    it("should return expected points with getPointN", () => {
        const g = new LineString([
            new Point([0.0, 0.0]),
            new Point([3.0, 4.0]),
        ]);

        expect(g.getPointN(0).x()).to.equal(0.0);
        expect(g.getPointN(0).y()).to.equal(0.0);

        expect(g.getPointN(1).x()).to.equal(3.0);
        expect(g.getPointN(1).y()).to.equal(4.0);
        expect(g.getPointN(2)).to.equal(undefined);

    });
});

