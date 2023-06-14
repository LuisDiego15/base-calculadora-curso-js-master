//funcion para agregar el num a la pantalla
function agregar(valor){
    document.getElementById('pantalla').value +=valor;
}

//funcion para borrar
function borrar(){
    document.getElementById('pantalla').value = '';
}

//funcion para calcular
function calcular(){
    const valorPantalla= document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}