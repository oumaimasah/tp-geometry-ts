
import { describe, it, expect } from "vitest";
import LineString from "../src/LineString";
import Point from "../src/Point";

describe("test LineString", () => {
  it("test default constructor", () => {
    const l = new LineString();
    expect(l.getNumPoints()).to.equal(0);
  });

  it("test constructor with points", () => {
    const a = new Point([0.0, 0.0]);
    const b = new Point([1.0, 1.0]);

    const l = new LineString([a, b]);

    expect(l.getNumPoints()).to.equal(2);
    expect(l.getPointN(0)).to.equal(a);
    expect(l.getPointN(1)).to.equal(b);
  });

  it("should return 'LineString' for getType()", () => {
    const l = new LineString();
    expect(l.getType()).to.equal("LineString");
  });

  it("test isEmpty", () => {
    expect(new LineString().isEmpty()).to.be.true;
    expect(new LineString([new Point([0, 0]), new Point([1, 1])]).isEmpty()).to
      .be.false;
  });

  it("test translate", () => {
    const l = new LineString([new Point([0.0, 0.0]), new Point([1.0, 1.0])]);
    l.translate(10.0, 20.0);
    expect(l.getPointN(0).getCoordinate()).to.deep.equal([10.0, 20.0]);
    expect(l.getPointN(1).getCoordinate()).to.deep.equal([11.0, 21.0]);
  });
});