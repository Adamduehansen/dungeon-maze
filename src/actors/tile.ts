import * as ex from "excalibur";
import { TiledObject, TiledSource } from "../tiled-source";
import { Ground } from "./ground";
import { Wall } from "./wall";

const GroundType = 18;
const WallType = 2;

export class Tile extends ex.Actor {
  constructor(pos: ex.Vector, tiledSource: TiledSource) {
    super({
      pos: pos,
    });

    for (const object of tiledSource.data.objects) {
      const cell = this.getCell(object);
      this.addChild(cell);
    }
  }

  getCell(object: TiledObject): ex.Actor {
    switch (object.type) {
      case GroundType:
        return new Ground({
          pos: ex.vec(object.x, object.y),
        });
      case WallType:
        return new Wall({
          pos: ex.vec(object.x, object.y),
        });
      default:
        throw new Error(`Unknown object type: ${object.type}`);
    }
  }
}
