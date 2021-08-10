import Sketch from "react-p5";
import VirusMonster from "../../classes/character/VirusMonster";

const monsters = [];
function Main() {
  const setup = (p5, canvasParentRef) => {
    for (let index = 0; index < 50; index++) {
      const monster = new VirusMonster({
        tentacleLength: p5.random(10, 80),
        mainRadius: p5.random(10, 80),
        p: [p5.random(p5.windowWidth), p5.random(p5.windowHeight)],
        a: [p5.random(-0.05, 0.05), p5.random(-0.05, 0.05)],
        v: [p5.random(-0.05, 0.05), p5.random(-0.05, 0.05)],
        max_v: p5.random(2, 10),
      });
      monsters.push(monster);
    }

    let v1 = p5.createVector(70, 50);
    let v2 = p5.createVector(110, 200);
    // let v3 = p5.Vector.sub(v2, v1);
    console.log(v1.limit(0));
    p5.createCanvas(1024, 1024).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(0);
    // if (p5.frameCount % 60 === 0) {
    //   console.log(p5.mouseX, p5.mouseY);
    //   if (monsters[0]) console.log(monsters[0].p, monsters[0].v, monsters[0].a);
    // }
    monsters.forEach((monster) => {
      monster.draw(p5);
    });
  };

  return <Sketch setup={setup} draw={draw} />;
}

export default Main;
