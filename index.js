import express from 'express';
import userRouter from './routes/users.js';


const app = express();
app.use(express.json());

const PORT = 2000;

app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
