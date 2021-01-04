
const x = prompt("Input min number:");
const y = prompt("Input max number:");

const min = Number(x);
const max = Number(y);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

alert(getRandomInt());
