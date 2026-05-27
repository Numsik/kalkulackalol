let firstnum = null
let secondnum = null
let operace = null
function handleNumber(num){
    document.querySelector('.vysledek').textContent += num;

}

function handleOperator(operator){
    firstnum = parseFloat(document.querySelector(".vysledek").textContent);
    document.querySelector('.vysledek').textContent = `${firstnum} ${operator} `;
    operace = operator;

}
function handleEqual(){
    let parts = document.querySelector(".vysledek").textContent.toString().split(" ");
    console.log(parts)
    secondnum = parseFloat(parts[2]);
    if (operace === '+') {
        document.querySelector('.vysledek').textContent = firstnum + secondnum;
    } else if (operace === '-') {
        document.querySelector('.vysledek').textContent = firstnum - secondnum;
    }   else if (operace === '*') {
        document.querySelector('.vysledek').textContent = firstnum * secondnum;
    } else if (operace === '/') {
        document.querySelector('.vysledek').textContent = firstnum / secondnum;
    }
}
function handleClear(){
    document.querySelector(".vysledek").textContent = ``;
    let firstnum = null
    let secondnum = null
    let operace = null
}
