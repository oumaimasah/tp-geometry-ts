import { describe, it, expect } from "vitest";
import EnvelopeBuilder from "../src/EnvelopeBuilder";

describe("test EnvelopeBuilder", () => {
    it("should build an empty envelope by default", () => {
        expect(new EnvelopeBuilder().build().isEmpty()).to.be.true;
    });

    it("should compute min and max", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([0.0, 1.0]);
        builder.insert([2.0, 0.0]);
        builder.insert([1.0, 3.0]);
        const result = builder.build();
        expect(result.isEmpty()).to.be.false;
        expect(result.toString()).to.equal("[0,0,2,3]");
    });

    it("should build a degenerate envelope from a single coordinate", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([3.0, 4.0]);
        const result = builder.build();
        expect(result.isEmpty()).to.be.false;
        expect(result.toString()).to.equal("[3,4,3,4]");
    });

    it("should handle negative coordinates", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([-1.0, -5.0]);
        builder.insert([-3.0, 2.0]);
        expect(builder.build().toString()).to.equal("[-3,-5,-1,2]");
    });

    it("should ignore an empty coordinate", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([]);
        expect(builder.build().isEmpty()).to.be.true;
    });

    it("should ignore an incomplete coordinate", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([1.0]);
        expect(builder.build().isEmpty()).to.be.true;
    });

    it("should not alter the envelope when ignoring invalid coordinates", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([1.0, 2.0]);
        builder.insert([]);
        builder.insert([9.0]);
        builder.insert([3.0, 4.0]);
        expect(builder.build().toString()).to.equal("[1,2,3,4]");
    });

    it("should expose bounds through the built envelope", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([0.0, 1.0]);
        builder.insert([2.0, 0.0]);
        const result = builder.build();
        expect(result.getXMin()).to.equal(0.0);
        expect(result.getYMin()).to.equal(0.0);
        expect(result.getXMax()).to.equal(2.0);
        expect(result.getYMax()).to.equal(1.0);
    });
});
