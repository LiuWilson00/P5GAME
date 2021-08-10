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
  }
  findTarget(p5) {}
  generate(p5) {
    p5.translate(this.vector_p.x, this.vector_p.y);
    p5.noStroke();
    //皮膚
    p5.fill(this.color.skin);
    p5.rect(0, 0, this.w, this.h, 20, 20, 0, 0);

    //頭髮
    p5.fill(this.color.hair);
    p5.rect(0, 0, this.w, this.h / 6, 10, 10, 0, 0);
    p5.rect(0, this.h / 6 - 10, this.w / 4, this.h / 8);
    p5.triangle(
      0,
      this.h / 6 + this.h / 8 - 10,
      this.w / 4,
      this.h / 6 + this.h / 8 - 10,
      this.w / 4,
      this.h / 6 + this.h / 8 + this.h / 8 - 1
    );

    //瀏海
    p5.fill(this.color.skin);
    const bangsWidth = 3;
    const bangsLocation = [
      { x: (this.w * 7) / 8, y: this.h / 8 },
      { x: (this.w * 3) / 4, y: this.h / 8 },
      { x: (this.w * 3) / 5, y: this.h / 10 },
      { x: (this.w * 3) / 7, y: this.h / 8 },
    ];
    bangsLocation.forEach((bangs) => {
      p5.triangle(
        bangs.x - bangsWidth,
        this.h / 6 + 10,
        bangs.x,
        this.h / 6 + 10,
        bangs.x - bangsWidth,
        bangs.y
      );
    });

    //眼睛
    p5.fill(this.color.eye);
    p5.rect(
      (this.w * 6) / 8,
      this.h / 5,
      this.w / 8,
      this.h / 20,
      50,
      50,
      50,
      50
    );

    //耳朵
    p5.fill(this.color.skin);
    p5.arc(
      this.w / 4,
      this.h / 4,
      this.h / 10,
      this.h / 10,
      p5.HALF_PI,
      -p5.HALF_PI
    );

    //衣服
    p5.fill(this.color.clothe);
    p5.rect(0, this.h / 2, this.w, this.h / 2);

    //褲子
    p5.fill(this.color.pants);
    p5.rect(0, (this.h * 6) / 7, this.w, this.h / 7);
  }
}
export default Body;
