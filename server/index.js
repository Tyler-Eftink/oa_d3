require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const jc = require('./controllers/jobController');

const app = express()

app.use(cors())

app.use(bodyParser.json())

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
    })
    .then(db => {
        app.set('db', db);
        console.log('The db is connected. The list of tables you have access to are: ' + app.get('db').listTables());
    })
    .catch(err => {
        console.log(err)
        console.log('---------Hint: You probably need my .env file!---------');
})

app.get('/api/chart1', jc.getChart1);
app.get('/api/chart2', jc.getChart2);
app.get('/api/chart3', jc.getChart3);

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}.`);
});