import * as ex from "excalibur";
import { GameScene } from "./scenes/game-scene";
import "./style.css";
import { loader } from "./resources";

const engine = new ex.Engine({
  suppressPlayButton: true,
  pixelArt: true,
  maxFps: 60,
  scenes: {
    gameScene: GameScene,
  },
});

await engine.start(loader);
await engine.goToScene("gameScene");
