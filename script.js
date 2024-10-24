document.getElementById('currency-form').addEventListener('submit', function(event){
    event.preventDefault();

    // obter valores de entrada do formulario 
    const valor = parseFloat(document.getElementById('amount').valeu);
    const daMoeda = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;

//conversão simples
let valorConvertido
if(daMoeda === paraMoeda){
    valorConvertido = valor;
}else{
    
}
   
});