const entities = [];
class Entity {
  constructor(
    args = {
      r: -1,
      w: -1,
      h: -1,
      p: [0, 0],
      v: [0, 0],
      a: [0, 0],
      color: "black",
      max_v: null,
      max_a: null,
    }
  ) {
    const { r, w, h, p, v, a, color, max_v, max_a, status } = args;
    this.status = status ?? { name: "entity" };
    this.r = r;
    this.p = p;
    this.v = v;
    this.a = a;
    this.w = w;
    this.h = h;
    this.color = color;
    this.max_v = max_v;
    this.max_a = max_a;
  }
  init(p5) {
    if (!this.vector_p) {
      this.vector_p = p5.createVector(this.p[0] ?? 0, this.p[1] ?? 1);
    }
    if (!this.vector_v) {
      this.vector_v = p5.createVector(this.v[0] ?? 0, this.v[1] ?? 1);
    }
    if (!this.vector_a) {
      this.vector_a = p5.createVector(this.a[0] ?? 0, this.a[1] ?? 1);
    }
  }
  generate(_p5) {}
  findTarget(_p5) {}
  draw(p5) {
    this.init(p5);
    p5.push();
    this.generate(p5);
    p5.pop();
    this.update(p5);
  }
  update(p5) {
    this.findTarget(p5);
    if (this.max_v || this.max_v === 0) {
      this.vector_v = this.vector_v.limit(this.max_v);
    }
    if (this.max_a || this.max_a === 0) {
      this.vector_a = this.vector_a.limit(this.max_a);
    }
    this.vector_p = this.vector_p.add(this.vector_v);
    this.vector_v = this.vector_v.add(this.vector_a);
    this.p = this.vector_p.array();
    this.v = this.vector_v.array();
    this.a = this.vector_a.array();
  }
}
export default Entity;
