import Coordinate from "./Coordinate";
import Geometry from "./Geometry";
import EnvelopeBuilder from "./EnvelopeBuilder";
import Envelope from "./Envelope";
import GeometryVisitor from "./GeometryVisitor";


export default class Point implements Geometry {
  private coordinate: Coordinate;

  constructor(coordinate: Coordinate = []) {
    this.coordinate = coordinate;
  }

  getType(): string {
    return "Point";
  }

  
  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  x(): number {
    return this.isEmpty() ? Number.NaN : this.coordinate[0];
  }

  y(): number {
    return this.isEmpty() ? Number.NaN : this.coordinate[1];
  }

  isEmpty(): boolean {
    return this.coordinate.length === 0;
  }

  translate(dx: number, dy: number): void {
    if (this.isEmpty()) {
      return;
    }
    this.coordinate[0] += dx;
    this.coordinate[1] += dy;
}
clone(): Point{
    return new Point([...this.coordinate]);
  }
  
  getEnvelope(): Envelope {
    const builder = new EnvelopeBuilder();
    builder.insert(this.coordinate);
    return builder.build();
    
  }
  accept(visitor: GeometryVisitor): void {
    visitor.visitPoint(this);
  }
}
