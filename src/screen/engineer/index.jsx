import Sketch from "react-p5";
import Engineer from "../../classes/character/Engineer/main";
import WebTitle from "../../classes/character/Title/main";

function EngineerScreen() {
  let e = null;
  let webTitle = null;
  let eOrigin = { x: 0, y: 0 };
  const eWidth = 160;
  const eHeigth = 300;
  const wWidth = 320;
  const wHeigth = eHeigth;

  const p5Marge = 75;
  const setup = (p5, canvasParentRef) => {
    eOrigin = {
      x: p5.windowWidth / 2 - eWidth * 3,
      y: p5.windowHeight / 2 - eHeigth / 2,
    };
    p5.background(255);
    e = new Engineer({
      w: eWidth,
      h: eHeigth,
      p: [eOrigin.x, eOrigin.y],
    });
    webTitle = new WebTitle({
      w: wWidth,
      h: wHeigth,
      p: [eOrigin.x + eWidth + p5Marge, eOrigin.y],
    });
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(255);

    e?.draw(p5);
    webTitle?.draw(p5);

    p5.textSize(32);
    p5.fill(0);
    p5.text(
      `x:${p5.mouseX - eOrigin.x},y:${parseFloat(p5.mouseY - eOrigin.y).toFixed(
        2
      )}`,
      0,
      500
    );
  };

  return <Sketch setup={setup} draw={draw} />;
}

export default EngineerScreen;
