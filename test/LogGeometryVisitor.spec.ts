import { describe, it, expect, vi, afterEach } from "vitest";
import LogGeometryVisitor from "../src/LogGeometryVisitor";
import Geometry from "../src/Geometry";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test LogGeometryVisitor", () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    function capture(geometry: Geometry): string[] {
        const logs: string[] = [];
        vi.spyOn(console, "log").mockImplementation((message: string) => {
            logs.push(message);
        });
        geometry.accept(new LogGeometryVisitor());
        return logs;
    }

    it("point vide", () => {
        expect(capture(new Point())).to.deep.equal(["Je suis un point vide."]);
    });

    it("point", () => {
        expect(capture(new Point([2.0, 3.0]))).to.deep.equal([
            "Je suis un point avec x=2.0 et y=3.0.",
        ]);
    });

    it("polyligne vide", () => {
        expect(capture(new LineString())).to.deep.equal(["Je suis une polyligne vide."]);
    });

    it("polyligne", () => {
        const l = new LineString([
            new Point([0.0, 0.0]),
            new Point([1.0, 1.0]),
            new Point([5.0, 5.0]),
        ]);
        expect(capture(l)).to.deep.equal(["Je suis une polyligne définie par 3 point(s)."]);
    });
});