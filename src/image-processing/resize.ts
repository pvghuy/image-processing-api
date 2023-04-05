import path from 'path';
import sharp from 'sharp';
import { promises as fsPromises } from 'fs';

export interface imageResizing {
  filename: string;
  width: number;
  height: number;
}

const fullFolder: string = path.resolve(__dirname, '../../assets/full');
const thumbnailFolder: string = path.resolve(
  __dirname,
  '../../assets/thumbnail'
);

const resizeImage = async (params: imageResizing): Promise<Buffer> => {
  return sharp(path.resolve(`${fullFolder}/${params.filename}.jpg`))
    .resize(params.width, params.height)
    .toBuffer();
};

const getExistResizedImagePath = (params: imageResizing): string => {
  return path.resolve(
    thumbnailFolder,
    `${params.filename}-${params.width}x${params.height}.jpg`
  );
};

const checkFileExist = async (params: imageResizing): Promise<boolean> => {
  const filePath: string = path.resolve(
    `${thumbnailFolder}`,
    `${params.filename}-${params.width}x${params.height}.jpg`
  );
  try {
    await fsPromises.access(filePath);
    return true;
  } catch {
    return false;
  }
};

export default { resizeImage, getExistResizedImagePath, checkFileExist };
