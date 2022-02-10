window.onload = function () {
    var segundos = 00;
    var decimos = 00;
    var addDecimos = document.getElementById("decimos");
    var addSegundos = document.getElementById("segundos");
    var botaoStart = document.getElementById('botao-start');
    var botaoStop = document.getElementById('botao-stop');
    var botaoReset = document.getElementById('botao-reset');
    var Intervalo ;

    botaoStart.onclick = function () {
        clearInterval(Intervalo);
        Intervalo = setInterval(iniciaCronometro, 10);
        
    }

    botaoStop.onclick = function () {
        clearInterval(Intervalo);
    }

    botaoReset.onclick = function () {
        clearInterval(Intervalo);
        decimos = "00";
        segundos = "00";
        addDecimos.innerHTML = decimos;
        addSegundos.innerHTML = segundos;
    }

    function iniciaCronometro() {
        decimos++;
        
        if (decimos <= 9) {
            addDecimos.innerHTML = "0" + decimos;
        }
        if (decimos > 9) {
            addDecimos.innerHTML = decimos;
        }
        if (decimos > 99) {
            console.log("segundos");
            segundos++;
            addSegundos.innerHTML = "0" + segundos;
            decimos = 0;
            addDecimos.innerHTML = "0" + 0;
        }
        if (segundos > 9) {
            addSegundos.innerHTML = segundos;
        }
    }
}