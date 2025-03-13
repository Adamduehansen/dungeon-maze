import * as ex from "excalibur";
import { TiledSource } from "../tiled-source";
import { Ground } from "./ground";

const GroundType = 18;

export class Tile extends ex.Actor {
  constructor(pos: ex.Vector, tiledSource: TiledSource) {
    super({
      pos: pos,
    });

    for (const object of tiledSource.data.objects) {
      switch (object.type) {
        case GroundType:
          const ground = new Ground({
            pos: ex.vec(object.x, object.y),
          });
          this.addChild(ground);
          break;
        default:
          break;
      }
    }
  }
}
