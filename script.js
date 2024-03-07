var lowerBound = document.querySelector('#lower');
var upperBound = document.querySelector('#upper');

var calculate = document.querySelector('#calculate');

var result = document.querySelector('#result');

if (!!window.Worker) {
    var myWorker = new Worker('worker.js');

    calculate.onclick = function() {
        document.getElementById("loading").style.display = 'block';
        myWorker.postMessage([lowerBound.value, upperBound.value]);
    }

    myWorker.onmessage = function(e) {
        document.getElementById("loading").style.display = 'none';
        var result = document.getElementById("result");
        var newDiv = document.createElement("div");
        var newContent = document.createTextNode(e.data);
        newDiv.appendChild(newContent);
        document.body.insertBefore(newDiv, result);
    }
}
