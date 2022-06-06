window.onload = function () {
    // VARIAVEIS PARA SALVAR O TEMPO
    var minuts = 00;
    var seconds = 57; 
    var tens = 00; 
    // VARIAVEIS PARA SE COMUNICAR COM O HTML
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var appendMinuts = document.getElementById("minuts");
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval;
  
    // FUCTION AO CLICAR INICAR O CONTADOR
    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    
    // FUNCTION AO CLICAR PAUSAS O CONTADOR
    buttonStop.onclick = function() {
        clearInterval(Interval);
    }
    
    // FUNCTION AO CLICAR RESETA O CONTADOR
    buttonReset.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        minuts = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinuts.innerHTML = minuts;
    }
    
     // FUNCTION DO CONTADOR
    function startTimer () {
        // ADICIONA 1
        tens++; 

        if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9){
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9){
            appendSeconds.innerHTML = seconds;
        }

        if (seconds > 59) {
            minuts++;
            tens = 0;
            seconds = 0;
        }

        if (minuts < 9) {
            appendMinuts.innerHTML = "0" + minuts;
        }

        if (minuts > 9) {
            appendMinuts.innerHTML = minuts;
        }

    }
}