var Valor1
var Valor2

function Adicao(){ 
    Valor1=document.getElementById('Valor1').value;
    Valor2=document.getElementById('Valor2').value; 
    total = parseInt(Valor1) + parseInt(Valor2);
    document.getElementById("txtTotal").value=total;
}
