import getImageNameList from '../../file/file';

describe('Test get all file names', (): void => {
  it('Get all file names', async (): Promise<void> => {
    const imagesNameList: string[] = await getImageNameList();
    expect(imagesNameList.length).toEqual(5);
  });
});
