import path from 'path';
import resize, { imageResizing } from '../../image-processing/resize';

const params: imageResizing = {
  filename: 'fjord',
  width: 200,
  height: 200,
};

describe('Test image-processing functions', (): void => {
  it('resizeImage: Successfully get file and save as buffer', async (): Promise<void> => {
    await expectAsync(resize.resizeImage(params)).toBeResolved();
  });

  it('getExistResizedImagePath: Successfully get thumbnail file path', (): void => {
    const filePath = path.resolve('./assets/thumbnail/fjord-200x200.jpg');
    expect(resize.getExistResizedImagePath(params)).toEqual(filePath);
  });

  it('checkFileExist: Get true value if file is exist', async (): Promise<void> => {
    const isFileExist = await resize.checkFileExist(params);
    expect(isFileExist).toBeTrue();
  });
});
