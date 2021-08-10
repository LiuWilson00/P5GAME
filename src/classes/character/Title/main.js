import RWord from "./components/RWord";

class Title {
  constructor(args) {
    this.rWord = new RWord(args);
  }

  draw(p5) {
    this.rWord.draw(p5);
  }
}
export default Title;
