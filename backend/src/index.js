import express from 'express';
import tournamentRoutes from './routes/tournamentRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/tournaments', tournamentRoutes);
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
