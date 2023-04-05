import express from 'express';
import routes from './routes';

const app = express();
const port = 3000;

app.use('/api', routes);

app.get('/', (req, res): void => {
  res.send("It's working!");
});

app.listen(port, (): void => {
  console.log(`App is listening on port ${port}`);
});

export default app;
