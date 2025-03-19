const display = document.getElementById("display");
var Screenstate = "";
var ison = false;


function number(num) {
    ison && (Screenstate += num) && (display.value = Screenstate);
}

function sign(Op) {
    ison && (Screenstate += Op) && (display.value = Screenstate) ;
}

function decimal(comma) {
    ison && (Screenstate += comma) && (display.value = Screenstate);
    
}

function clearscreen() {
    ison && ((Screenstate ="") && (display.value =""));
}

function erase() {
    ison && ((Screenstate = Screenstate.slice(0, -1)) && (display.value = Screenstate));
  }

function calculate() {
    ison && (( display.value = eval(Screenstate))) ;

}

function turnon(){
    ison = true ;
    display.value= "Enter Numbers To Calculate!";

}

function turnoff(){
    ison = false ;
    display.value= "OFF";

}



    