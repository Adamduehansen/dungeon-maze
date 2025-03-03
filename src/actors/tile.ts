import * as ex from "excalibur";
import { Ground } from "./ground";
import { chunk } from "../lib/chunk";

export interface TileLayer {
  type: "tilelayer";
  data: number[];
}

export interface ObjectGroup {
  type: "objectgroup";
  objects: unknown[];
}

type TileData = {
  columns: number;
  rows: number;
  layers: (TileLayer | ObjectGroup)[];
};

const GroundId = 18;

export class Tile extends ex.Actor {
  #tileData: TileData;

  constructor(pos: ex.Vector, tileData: TileData) {
    super({
      pos: pos,
    });
    this.#tileData = tileData;
  }

  onInitialize(engine: ex.Engine): void {
    super.onInitialize(engine);

    this.logger.info("Tile data", this.#tileData);

    // TODO: Load objects from layers into child game object.
    const layer1 = this.#tileData.layers[0];

    // const rows = chunk(
    //   this.#tileData.layers[1].data,
    //   this.#tileData.columns,
    // );

    // console.log(rows);
  }

  #getCell(dataId: number): Ground {
    switch (GroundId) {
      case 18:
        return new Ground();
      default:
        throw new Error(`Unexpected dataId: ${dataId}`);
    }
  }
}
