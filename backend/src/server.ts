import express from 'express';
import cors from 'cors';
import router from './routes'

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', router);

app.listen(3000, () => {console.log('Server is running on http://localhost:3000')});