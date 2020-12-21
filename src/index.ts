import express from 'express';
const app = express();
const port = 9000;


app.get('/', (_req, res) => res.status(200).json('Helloo'))

app.listen(port, () => {
    console.log(`Server started at [app]: http://localhost:${port}`);
})