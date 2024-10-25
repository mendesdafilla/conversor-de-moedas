document.getElementById('currency-form').addEventListener('submit', function(event){
    event.preventDefault();

    // obter valores de entrada do formulario 
    const valor = parseFloat(document.getElementById('amount').valeu);
    const daMoeda = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;
//definir taxa de cambio fixa 
 const exchangeRates = {
    USD:{ BRL: 5.67 , EUR: 0.92 },
    BRL:{ USD: 0.18, EUR: 0.16 },
    EUR:{ USD: 1.08, BRL: 6.16 },
 };
//conversão simples
let valorConvertido
if(daMoeda === paraMoeda){
    valorConvertido = valor;
}else{
    valorConvertido = valor * exchangeRates[daMoeda][paraMoeda];
}
 //Exibir resultado
 const conversão = document.getElementById('conversao');
 conversao.textContent = `Resultado: ${valorConvertido}`;

});