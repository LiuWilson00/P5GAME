import Entity from "../../../prototype/Entity";
import defaultColors from "./defaultColors.json";

class Body extends Entity {
  constructor(args) {
    const { w, h, colors, p } = args;
    let processColor = colors ?? defaultColors;
    super({
      p,
      w,
      h,
      v: [0, 0],
      a: [0, 0],
      color: processColor,
    });
    this.basicSize = {
      w: this.w / 3,
      h: this.h / 3,
    };
    this.radius = 10;
    this.merge = 20;
  }
  findTarget(p5) {}
  generate(p5) {
    const { w, h } = this.basicSize;
    p5.translate(this.vector_p.x, this.vector_p.y);
    p5.stroke(255);
    p5.strokeWeight(10);
    p5.fill(this.color.primary);
    p5.rect(0, 0, w, h * 3, this.radius);
    p5.rect(w, 0, w * 2, h * 2, this.radius);
    p5.rect(w * 2, h * 2, w, h, this.radius);
    // p5.rect(0, h, w, h, this.radius);
    // p5.rect(0, h * 2, w, h, this.radius);
  }
}
export default Body;
