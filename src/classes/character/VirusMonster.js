import Entity from "../prototype/Entity";
const colors = ["#006d77", "#83c5be", "#edf6f9", "#ffddd2", "#e29578"];
class VirusMoster extends Entity {
  constructor(args) {
    const { tentacleLength, mainRadius, color, p, a, v, max_v } = args;
    let processColor = color;
    if (!color) {
      processColor = colors[parseInt((Math.random() * 500) % 5)];
    }
    super({
      r: tentacleLength + mainRadius,
      p,
      a,
      v,
      color: processColor,
      max_v: max_v,
      max_a: 0.1,
    });
    this.tentacleLength = tentacleLength;
    this.mainRadius = mainRadius;
  }
  findTarget(p5) {
    const mouseVector = p5.createVector(p5.mouseX, p5.mouseY);

    this.vector_a = mouseVector.sub(this.vector_p);
  }
  generate(p5) {
    p5.translate(this.vector_p.x, this.vector_p.y);
    p5.fill(this.color);
    p5.noStroke();
    p5.ellipse(0, 0, this.mainRadius);
    p5.fill(255);
    p5.arc(0, 0, this.mainRadius / 2, this.mainRadius / 2, 0, p5.PI);
    p5.fill(0);
    p5.arc(0, 0, this.mainRadius / 3, this.mainRadius / 3, 0, p5.PI);
    p5.stroke(this.color);
    p5.noFill();
    for (let j = 0; j < 8; j++) {
      p5.rotate(p5.PI / 4);
      p5.beginShape();
      for (let index = 0; index < this.tentacleLength; index += 5) {
        p5.vertex(
          this.mainRadius / 2 + index,
          p5.sin(index / 5 + -p5.frameCount / 5) * 10
        );
      }
      p5.endShape();
    }
  }
}
export default VirusMoster;
