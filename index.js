const display = document.getElementById('vysledek');

function Clear(){
    display.value = "";
}
function append(num){
    display.value += num;
}
function handleOperator(){
    display.value = eval(display.value);
}