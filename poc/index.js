const express = require('express');
var cors = require('cors')
const bodyParser = require("body-parser")
const { process } = require('./src/services/process.service');
const { updateWindow } = require('./src/services/window.service');
const { getEvents } = require('./src/services/events.service');

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3005;

app.post('/', async (req, res) => {
    try {
        await process(req.body);
        res.status(200).send("success");
    } catch (e) {
        return res.status(500).send(e.message);
    }
})

app.put('/window', async (req, res) => {
    try {
        await updateWindow(req.body.value, req.body.deviceId, req.body.type);
        res.status(200).send('Updated window');
    } catch (e) {
        return res.status(500).send(e.message);
    }
})

app.get('/event', async (req, res) => {
    try {
        const result = await getEvents();
        res.status(200).send(result);
    } catch (e) {
        return res.status(500).send(e.message);
    }

});

app.listen(port, function () {
    console.log('Example app listening on port', port)
})