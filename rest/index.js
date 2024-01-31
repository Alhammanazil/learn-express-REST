const path = require('path');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        username: 'Luke',
        text: `Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.`
    },
    {
        username: 'Michael',
        text: `Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.`
    },
    {
        username: 'Dwight',
        text: `I am running away from my responsibilities. And it feels good.`
    },
    {
        username: 'Jim',
        text: `Bears. Beets. Battlestar Galactica.`
    },
    {
        username: 'Pam',
        text: `I don't understand the question, and I won't respond to it.`
    }
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

app.get('/order', (req, res) => {
    res.send('GET order response');
});

app.post('/order', (req, res) => {
    const {item, qty} = req.body;
    res.send(`Item:${item} - Qty:${qty}`);
});

app.get('/', (req, res) => {
    console.log('Server is running on http://localhost:8080');
});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});