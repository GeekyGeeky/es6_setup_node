import express, { json } from 'express';
import items from './items';

const app = express();

app.use(json())

const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    res.json({ status: true, message: "Our node.js app works" })
});

app.get('/items', (req, res) => {
    res.json({ status: true, message: "Fetched all items", data: items })
})

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));