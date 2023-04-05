import supertest from 'supertest';
import app from '../index';

const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe('Test responses from different endpoints', (): void => {
  it('Endpoint: /', async (): Promise<void> => {
    const response: supertest.Response = await request.get('/');
    expect(response.status).toBe(200);
  });

  it('Endpoint: /api/images', async (): Promise<void> => {
    const response: supertest.Response = await request.get('/api/images');
    expect(response.status).toBe(200);
  });

  it('Endpoint: /api/images?filename=fjord (missing width and height)', async (): Promise<void> => {
    const response: supertest.Response = await request.get(
      '/api/images?filename=fjord'
    );
    expect(response.status).toBe(200);
  });

  it('Endpoint: /api/images?filename=fjord&width=-200&height=200 (negative width)', async (): Promise<void> => {
    const response: supertest.Response = await request.get(
      '/api/images?filename=fjord&width=-200&height=200'
    );
    expect(response.status).toBe(200);
  });

  it('Endpoint: /api/videos (not exist api)', async (): Promise<void> => {
    const response: supertest.Response = await request.get('/api/videos');
    expect(response.status).toBe(404);
  });
});
