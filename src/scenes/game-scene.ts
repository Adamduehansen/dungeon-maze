import * as ex from "excalibur";
import { Hero } from "../actors/hero";
import { Cell } from "../actors/cell";

export class GameScene extends ex.Scene {
  #player!: Hero;

  constructor() {
    super();
  }

  override onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);

    this.#player = new Hero({
      pos: ex.vec(100, 100),
    });
    this.add(this.#player);

    const cell = new Cell({
      pos: ex.vec(150, 150),
    });
    this.add(cell);

    // Camera
    this.camera.zoom = 2;
    this.camera.pos = this.#player.pos;
  }

  override onActivate(context: ex.SceneActivationContext<unknown>): void {
    super.onActivate(context);
    this.input.pointers.on("down", this.mouseDownHandler.bind(this));
  }

  private mouseDownHandler(event: ex.PointerEvent): void {
    console.log(event);
  }
}
