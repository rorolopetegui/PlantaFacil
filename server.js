const express = require('express');
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var relay = new Gpio(26, 'out'); //use GPIO pin 4, and specify that it is output
const app = express();

app.get('/api/turnOn', (req, res) => {
    let ret = false;
    if (relay.readSync() === 0) { //check the pin state, if the state is 0 (or off)
        relay.writeSync(1); //set pin state to 1 (turn LED on)
        ret = true;
    } else {
        relay.writeSync(0); //set pin state to 0 (turn LED off)
    }
    res.json(ret);
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));