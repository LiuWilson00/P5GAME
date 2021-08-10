import Entity from "../../../prototype/Entity";
import defaultColors from "./defaultColors.json";
class Hand extends Entity {
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
  }
  findTarget(p5) {}
  generate(p5) {
    //手臂
    const handWidth = this.w / 4;
    const handHeigth = (this.h * 2) / 7;
    const handAxis = { x: handWidth / 2, y: 20 };
    const handOrigin = {
      x: this.w / 2,
      y: (this.h * 4) / 7,
    };

    let fromColor = p5.color(this.color.clothe);
    let toColor = p5.color("#F9F9F9");
    const handColor = p5.lerpColor(fromColor, toColor, 0.15);

    fromColor = p5.color(this.color.skin);
    toColor = p5.color("#171717");
    const handSkinColor = p5.lerpColor(fromColor, toColor, 0.03);

    p5.noStroke();
    // p5.stroke(0);
    // p5.strokeWeight(5);

    p5.translate(
      this.vector_p.x + handOrigin.x,
      this.vector_p.y + handOrigin.y
    );

    p5.rotate(-p5.PI / 4 + p5.sin(-p5.frameCount / 100) * 0.1);
    p5.fill(handColor);

    // p5.rect(10, 10, this.w / 8, this.h / 20, 50, 50, 50, 50);

    p5.rect(-handAxis.x, -handAxis.y, handWidth, handHeigth, 50, 50);

    p5.translate(0, handHeigth - handAxis.y * 2);
    p5.rotate(-1.3 + p5.sin(-p5.frameCount / 20) * 0.1);
    p5.rect(-handAxis.x, -handAxis.y, handWidth, handHeigth, 50, 50);

    p5.translate(0, handHeigth - handAxis.y * 2);
    p5.fill(handSkinColor);
    let fream = p5.frameCount % 300;

    p5.rotate(-5.6 + (fream >= 240 ? p5.sin((fream - 240) / 5) * 0.3 : 0));
    p5.rect(-handAxis.x, 0, handWidth, handHeigth / 2, 0, 0, 50, 5);
  }
}
export default Hand;
