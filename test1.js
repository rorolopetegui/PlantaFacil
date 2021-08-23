var _ = require('lodash');
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

var gpioList = [26, 19, 13, 06, 12, 16, 20, 21];
var sensors = [];

for (var i = 0; i < gpioList.length; i++) {
    sensors.push(new Gpio(gpioList[i], 'out')); //use GPIO pin 4, and specify that it is output
}

console.log('20', sensors[_.findIndex(sensors, ['_gpio', 20])]);

var myTest = sensors[_.findIndex(sensors, ['_gpio', 20])];

console.log('myTest', myTest);
myTest.writeSync(0)
console.log('A 0');

setTimeout(() => {
    myTest.writeSync(1)
    console.log('A 1');
}, 1000)

setTimeout(() => {
    myTest.writeSync(0)
    console.log('A 0');
}, 2000)

setTimeout(() => {
    myTest.writeSync(1)
    console.log('A 1');
}, 3000)

setTimeout(() => {
    myTest.writeSync(0)
    console.log('A 0');
}, 4000)

setTimeout(() => {
    myTest.writeSync(1)
    console.log('A 1');
}, 5000)