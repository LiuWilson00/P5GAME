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
    this.isTouch = false;
    this.tieLocal = {
      x: (this.w * 4) / 5,
      y: this.h / 2 + this.h / 40,
    };
    this.tieWidth = (this.w / 10) * 2;
    this.tieHeigth = (this.h * 5) / 6 - this.tieLocal.y;
  }

  findTarget(p5) {}
  checkTouch(p5) {
    const tieSizeInfo = {
      x: this.vector_p.x + this.tieLocal.x - this.tieWidth / 2,
      y: this.vector_p.y + this.tieLocal.y,
      w: this.tieWidth,
      h: this.tieHeigth,
    };
    // p5.rect(tieSizeInfo.x, tieSizeInfo.y, tieSizeInfo.w, tieSizeInfo.h);
    if (
      p5.mouseX >= tieSizeInfo.x &&
      tieSizeInfo.x + tieSizeInfo.w >= p5.mouseX &&
      p5.mouseY >= tieSizeInfo.y &&
      tieSizeInfo.y + tieSizeInfo.h >= p5.mouseY &&
      !this.isTouch
    ) {
      this.isTouch = p5.frameCount;
    }
  }
  generate(p5) {
    this.checkTouch(p5);
    p5.translate(
      this.vector_p.x + this.tieLocal.x,
      this.vector_p.y + this.tieLocal.y
    );
    if (this.isTouch && p5.frameCount - this.isTouch <= 60) {
      p5.rotate(p5.sin((p5.frameCount - this.isTouch) / 10) * 0.25);
    } else if (this.isTouch) {
      this.isTouch = false;
    }
    // p5.rotate(p5.mouseX / 100);

    //領帶
    p5.fill(this.color.hair);
    p5.quad(
      0,
      0,
      -this.tieWidth / 2,
      (this.tieHeigth * 3) / 4,
      0,
      this.tieHeigth,
      this.tieWidth / 2,
      (this.tieHeigth * 3) / 4
    );
  }
}
export default Body;
