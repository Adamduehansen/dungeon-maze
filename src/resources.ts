import * as ex from "excalibur";

export const Resources = {
  spriteSheet: new ex.ImageSource("./spritesheet.png"),
} as const;

export const spriteSheet = ex.SpriteSheet.fromImageSource({
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

export const loader = new ex.Loader();
loader.addResource(Resources.spriteSheet);
