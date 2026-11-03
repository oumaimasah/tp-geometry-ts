import { describe, it, expect } from "vitest";
import Point from "../src/Point";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([]);
        expect(Number.isNaN(p.x())).to.be.true;
        expect(Number.isNaN(p.y())).to.be.true;
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0, 4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0, 4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
    });
    it("should return 'Point' for gettype()", () => {
        const p = new Point();
        expect(p.getType()).to.equal("Point");
    });
    it("test isEmpty", () => {
        expect(new Point().isEmpty()).to.be.true;
        expect(new Point([3.0, 4.0]).isEmpty()).to.be.false;
    });
});

