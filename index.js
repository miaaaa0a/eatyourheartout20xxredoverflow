// https://stackoverflow.com/a/4562604
const currentyear = /\d{4}/.exec(Date())[0]
const endofeyho = new Date(parseInt(currentyear), 12, 1, 0, 0, 0, 0);

console.log(currentyear);
console.log(endofeyho);

var untilendofeyho = countdown(null, endofeyho);
var countdownel = document.getElementById('countdown');
var untiltxt = document.getElementById('untiltxt');
untiltxt.innerHTML = 'left until eat your heart out <b>'+(parseInt(currentyear)+1).toString()+"</b> redoverflow"
countdownel.innerHTML = untilendofeyho.toString();

var countdownintfunc = setInterval(() => {
    var untilendofeyho = countdown(null, endofeyho);
    countdownel.innerHTML = untilendofeyho.toString();
}, 1000);