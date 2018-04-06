const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

const port = process.env.PORT || 4000;

app.get('/api/inventory', controller.getAll);
app.post('/api/product', controller.create);





app.listen(port, () =>
{
    console.log(`Someone's always listening... on port: ${port}`);
});