function generarAleatorio(min,max){
    let random=Math.random();
    let num=random*(max-min);
    let numEntero = Math.ceil(num);
    numEntero = numEntero+min;
    return numEntero;
}
function mostrarEnSpan(idSpan,valor) {
    let componente=document.getElementById(idSpan);
        componente.textContent=valor;
    
}