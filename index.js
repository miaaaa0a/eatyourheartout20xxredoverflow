// https://stackoverflow.com/a/4562604
const currentyear = /\d{4}/.exec(Date())[0]
const endofeyho = new Date(parseInt(currentyear), 12, 1, 0, 0, 0, 0);

console.log(currentyear);
console.log(endofeyho);

var untilendofeyho = countdown(null, endofeyho);
var countdownel = document.getElementById('countdown');
var untiltxt = document.getElementById('untiltxt');
var milestone1 = document.getElementById('milestone1');
var codebtn = document.getElementById('copyembedcode');
var clipboardtoast = document.getElementById('clipboardtoast');
untiltxt.innerHTML = 'left until eat your heart out <b>'+(parseInt(currentyear)+1).toString()+"</b> redoverflow"
countdownel.innerHTML = untilendofeyho.toString();
milestone1.innerHTML = milestone1.innerHTML + " (<b><em>" + countdown(null, new Date(2021, 10, 1), countdown.DAYS).toString() + " ago</em></b>)";

var countdownintfunc = setInterval(() => {
    var untilendofeyho = countdown(null, endofeyho);
    countdownel.innerHTML = untilendofeyho.toString();
}, 1000);

//get a parameter specified in input from the url also specified in input
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

if (getParameterByName('embed') == 'true') {
    console.log("embed param detected");
    //iterate over every element with id "removeinembed"
    var removeinembed = document.getElementsByClassName('removeinembed');
    for (var i = 0; i < removeinembed.length; i++) {
        //remove element
        removeinembed[i].parentNode.removeChild(removeinembed[i]);
    }
    //change style of class "smol" to "font-size: 1.5vw;"
    var smol = document.getElementsByClassName('smol');
    smol[0].style.fontSize = '1.5vw';
}

if (typeof(codebtn) != 'undefined' && codebtn != null) {
    codebtn.onclick = function() {
        navigator.clipboard.writeText(window.location.href+'?embed=true')
        .then(() => {
            console.log('copied url to clipboard');
        })
        .catch(err => {
            console.log('Something went wrong', err);
        });
    }
}