import path from 'path';
import { promises as fsPromises } from 'fs';

const imagesPath = path.resolve(__dirname, '../../assets/full');

const getImageNameList = async (): Promise<string[]> => {
  try {
    return (await fsPromises.readdir(imagesPath)).map(
      (fileName: string): string => fileName.split('.')[0]
    );
  } catch {
    return [];
  }
};

export default getImageNameList;
