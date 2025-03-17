import * as ex from "excalibur";
import { TiledObject, TiledSource } from "../tiled-source";
import { Ground } from "./ground";
import { Wall } from "./wall";

const GroundType = 18;
const WallType = 2;
const CornerRightType = 1;
const CornerLeftType = 4;

export class Tile extends ex.Actor {
  constructor(pos: ex.Vector, tiledSource: TiledSource) {
    super({
      name: "Tile",
      pos: pos,
      width: tiledSource.data.width,
      height: tiledSource.data.height,
      anchor: ex.vec(0, 0),
    });

    this.#parseObjects(tiledSource.data.objects);
  }

  #parseObjects(tiledObjects: TiledObject[]) {
    for (const object of tiledObjects) {
      const cell = this.#getCell(object);
      this.addChild(cell);
    }
  }

  #getCell(object: TiledObject): ex.Actor {
    switch (object.type) {
      case GroundType:
        return new Ground({
          pos: ex.vec(object.x, object.y),
        });
      case WallType:
      case CornerRightType:
      case CornerLeftType:
        return new Wall({
          pos: ex.vec(object.x, object.y),
        });
      default:
        throw new Error(`Unknown object type: ${object.type}`);
    }
  }
}
