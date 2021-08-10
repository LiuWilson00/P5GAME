import body from "./components/body";
import hand from "./components/hand";
import tie from "./components/tie";
class Engineer {
  constructor(args) {
    this.eBody = new body(args);
    this.eHand = new hand(args);
    this.tie = new tie(args);
  }

  draw(p5) {
    this.eBody.draw(p5);
    this.tie.draw(p5);
    this.eHand.draw(p5);
  }
}
export default Engineer;
