import fs from 'fs';
import { NextFunction, Request, Response } from 'express';
import svgSprite from 'svg2sprite';

export default () => {
  const sprite = svgSprite.collection({ inline: true });

  fs.readdirSync('src/icons').forEach((iconName) => {
    try {
      const iconData = fs.readFileSync(`src/icons/${iconName}`, 'utf8');
      sprite.add(`svg-${iconName.replace('.svg', '')}`, iconData);
    } catch (error) {
      console.error(error);
    }
  });

  const spritesheet = sprite.compile();

  return (request: Request, response: Response, next: NextFunction) => {
    response.locals.spritesheet = spritesheet;
    next();
  };
};
