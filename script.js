window.onload = function(){
    var startBtn = document.getElementById("start");
    var resetBtn = document.getElementById("reset");
    var stopBtn = document.getElementById("stop");

    var secDisplay  =document.getElementById("seconds");
    var tensDisplay = document.getElementById("tens");
    var minsDisplay = document.getElementById("mins");


    secs = 0;
    tens = 0;
    mins = 0;

    var interval;

    startBtn.onclick = function(){
        clearInterval(interval);
        interval = setInterval(startWatch, 10);
    }

    stopBtn.onclick = function(){
        clearInterval(interval);
    }

    resetBtn.onclick = function(){
        clearInterval(interval);
        tens = 0;
        secs = 0;
        mins = 0;
        tensDisplay.innerHTML = "00";
        secDisplay.innerHTML = "00";
        minsDisplay.innerHTML = "00";
    }

    function startWatch(){
        tens++;
        if(tens <= 9){
            tensDisplay.innerHTML = "0" + tens;
        }
        if(tens > 9){
            tensDisplay.innerHTML = tens;
        }

        if(tens > 99){
            tens = 0;
            tensDisplay.innerHTML = "00";
            secs++;
            secDisplay.innerHTML = "0" + secs;
        }

        if(secs > 9){
            secDisplay.innerHTML = secs;
        }

        if(secs > 59){
            secs = 0;
            secDisplay.innerHTML = "00";
            mins++;
        }
        
        if(mins < 10){
            minsDisplay.innerHTML = "0" + mins;
        }

        if(mins > 9){
            minsDisplay.innerHTML = mins;
        }
    }
}