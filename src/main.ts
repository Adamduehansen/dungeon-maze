import * as ex from "excalibur";
import "./style.css";

const Resources = {
  spriteSheet: new ex.ImageSource("./spritesheet.png"),
} as const;

const spriteSheet = ex.SpriteSheet.fromImageSource({
  image: Resources.spriteSheet,
  grid: {
    columns: 16,
    rows: 10,
    spriteHeight: 8,
    spriteWidth: 8,
  },
  spacing: {
    margin: {
      x: 1,
      y: 1,
    },
  },
});

type HumanArgs = Pick<ex.ActorArgs, "pos">;

class Human extends ex.Actor {
  constructor({ pos }: HumanArgs) {
    super({
      pos: pos,
      name: "Human",
    });
  }

  override onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);
    this.graphics.use(spriteSheet.getSprite(4, 0));
  }
}

class GameScene extends ex.Scene {
  #player!: Human;

  override onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);
    this.#player = new Human({
      pos: ex.vec(100, 100),
    });
    this.add(this.#player);
  }
}

const loader = new ex.Loader();
loader.addResource(Resources.spriteSheet);

const engine = new ex.Engine({
  suppressPlayButton: true,
  scenes: {
    gameScene: GameScene,
  },
});

await engine.start(loader);
await engine.goToScene("gameScene");
