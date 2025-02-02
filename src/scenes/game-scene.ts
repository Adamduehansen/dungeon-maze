import * as ex from "excalibur";
import { Human } from "../actors/human";
import { Tile } from "../actors/tile";

export class GameScene extends ex.Scene {
  #player!: Human;

  constructor() {
    super();
    this.mouseDownHandler = this.mouseDownHandler.bind(this);
  }

  override onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);

    this.#player = new Human({
      pos: ex.vec(100, 100),
    });
    this.add(this.#player);

    const tile = new Tile({
      pos: ex.vec(150, 150),
    });
    this.add(tile);

    // Camera
    this.camera.zoom = 2;
    this.camera.pos = this.#player.pos;
  }

  override onActivate(context: ex.SceneActivationContext<unknown>): void {
    super.onActivate(context);
    this.input.pointers.on("down", this.mouseDownHandler);
  }

  private mouseDownHandler(event: ex.PointerEvent): void {
    console.log(event);
  }
}
