var operandoa;
var operandob;
var operacion;

function init() {
    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    var fact = document.getElementById('fact');
    var pot = document.getElementById('pot');
    var sin = document.getElementById('sin');
    var cos = document.getElementById('cos');
    var tan = document.getElementById('tan');
}
//Eventos de click
uno.onclick = function (e) {
    resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function (e) {
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function (e) {
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function (e) {
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function (e) {
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function (e) {
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function (e) {
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function (e) {
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function (e) {
    resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function (e) {
    resultado.textContent = resultado.textContent + "0";
}
reset.onclick = function (e) {
    resetear();
}
suma.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function (e) {
    operandob = resultado.textContent;
    resolver();
}

pot.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "p"
    limpiar();
}
fact.onclick = function(e) {
    operandoa = resultado.textContent;
    operacion = "f";
    resolver();
}

sin.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = 'sin';
    resolver();
}
cos.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = 'cos';
    resolver();
}

tan.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = 'tan';
    resolver();
}
bin.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = 'bin';
    resolver();

}
function limpiar() {
    resultado.textContent = "";
}

function resetear() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
        case "p":
            res = Math.pow(parseFloat(operandoa), parseFloat(operandob));
            break;
        case "f":
            res = factorial(parseInt(operandoa));
            break;
        case "sin":
            res = seno(parseFloat(operandoa));
            break;
        case "cos":
            res = coseno(parseFloat(operandoa));
            break;
        case "tan":
            res = tangente(parseFloat(operandoa));
            break;
        case "bin":
            res = binario(parseInt(operandoa));

    }
    resetear();
    resultado.textContent = res;
}
function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}

function seno (n){
    var n = (Math.PI/180)*n;
    var total = Math.sin(n);
    return total;
}

function coseno (n){
    var n = (Math.PI/180)*n;
    var total = Math.cos(n);
    return total;
}
function tangente (n){
    var n = (Math.PI/180)*n;
    var total = Math.tan(n);
    return total;
}

function binario (n){
    var total = (n.toString(2));
    return total; 
}