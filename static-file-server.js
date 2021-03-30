import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const PORT = 8080;
const app = express();

app.use(express.static(path.resolve(__dirname, 'build')));

app.listen(PORT, () => {
    console.log(`Server has been started: http://localhost:${PORT}`)
});