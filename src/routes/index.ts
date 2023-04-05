import express from 'express';
import resize, { imageResizing } from '../image-processing/resize';
import getImageNameList from '../file/file';
import path from 'path';
import { promises as fsPromises } from 'fs';

const routes = express.Router();

const validate = async (query: imageResizing): Promise<null | string> => {
  const width: number = parseInt(query.width as unknown as string) || 0;
  const height: number = parseInt(query.height as unknown as string) || 0;
  if (!query.filename) {
    const imageNameList: string = (await getImageNameList()).join(', ');
    return `Here is list of file name that you can insert to use: ${imageNameList}.`;
  }
  if (!query.height || !query.width) {
    return "Please insert both 'width' and 'height' to resize image.";
  }
  if (Number.isNaN(height) || height < 1) {
    return "Please insert a positive number for 'height'.";
  }
  if (Number.isNaN(width) || width < 1) {
    return "Please insert a positive number for 'width'.";
  }

  return null;
};

routes.get('/', async (req, res): Promise<void> => {
  try {
    const params: imageResizing = {
      filename: req.query.filename as string,
      width: parseInt(req.query.width as string),
      height: parseInt(req.query.height as string),
    };
    const validationMessage: null | string = await validate(params);
    const isFileExist: boolean = await resize.checkFileExist(params);

    if (validationMessage) {
      res.send(validationMessage);
      return;
    }

    if (!isFileExist) {
      const resizedImage = await resize.resizeImage(params);
      await fsPromises.writeFile(
        path.resolve(
          __dirname,
          `../../assets/thumbnail/${params.filename}-${params.width}x${params.height}.jpg`
        ),
        resizedImage
      );
    } else {
      const existResizedImagePath: string =
        await resize.getExistResizedImagePath(params);
      res.sendFile(path.resolve(existResizedImagePath));
    }
  } catch (err: any) {
    res.json({ message: err.message });
  }
});

routes.use('/images', routes);

export default routes;
