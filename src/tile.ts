import * as ex from "excalibur";
import { Cell, CellConfig } from "./actors/cell";
import { TiledResource } from "@excaliburjs/plugin-tiled";

export class Tile extends ex.Actor {
  #tiledResource: TiledResource;
  readonly cells: Cell[] = [];

  constructor(tiledResouce: TiledResource) {
    super({
      name: "Start tile",
    });
    this.#tiledResource = tiledResouce;
  }

  override onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);

    // const { rows, columns, cells } = this.#tileConfig;

    // for (let index = 0; index < rows * columns; index++) {
    //   const column = index % columns;
    //   const row = Math.floor(index / columns);
    //   const cell = new Cell({
    //     column: column,
    //     row: row,
    //     type: cells[row][column].type,
    //   });
    //   this.addChild(cell);
    //   this.cells.push(cell);
    // }
  }

  addToGame(scene: ex.Scene): void {
    this.#tiledResource.addToScene(scene);
  }
}
