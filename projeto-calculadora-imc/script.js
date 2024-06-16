//imc = peso / (altura x altura)


// SELEÇÃO DOS ITENS
let nome = document.querySelector("#cxnomeid");
let altura = document.querySelector("#cxalturaid");
let peso = document.querySelector("#cxpesoid");
let formulario = document.querySelector('form')

let resultadoimc = "";
let txtResultado = document.querySelector("#txt-resultado");
let txtResultadoMsg = document.querySelector("#txt-resultado-msg");
let caixaResultado = document.querySelector("#caixa-resultado");

let btn = document.querySelector("#btn-calcular"); //Seleciona o botão que calcula
let btn2 = document.querySelector("#btn-limpar"); //Seleciona o botão que limpa os campos





// Calculo do IMC
function calcularIMC(){
    resultadoimc = parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value));

    if (resultadoimc < 18.5){
        txtResultado.innerHTML = "Resultado: " + resultadoimc.toFixed(2) + " (Magreza)"
        txtResultadoMsg.innerHTML = "Cuide-se, " + nome.value + ". Seu peso está abaixo do normal.";
        caixaResultado.style.backgroundColor = "#f51616";
        
    } else if (resultadoimc >= 18.5 && resultadoimc <= 24.9){
        txtResultado.innerHTML = "Resultado: " + resultadoimc.toFixed(2) + " (Normal)"
        txtResultadoMsg.innerHTML = "Boas notícias, " + nome.value + ". Seu peso está normal.";
        caixaResultado.style.backgroundColor = "#49fa25";

    } else if (resultadoimc >= 25 && resultadoimc <= 30){
        txtResultado.innerHTML = "Resultado: " + resultadoimc.toFixed(2) + " (Sobrepeso)"
        txtResultadoMsg.innerHTML = "Cuide-se, " + nome.value + ". Seu peso está acima do normal.";
        caixaResultado.style.backgroundColor = "#f05d02";

    } else if (resultadoimc > 30){
        txtResultado.innerHTML = "Resultado: " + resultadoimc.toFixed(2) + " (Obesidade)"
        txtResultadoMsg.innerHTML = "Atenção, " + nome.value + ". Seu peso está muito acima do normal.";
        caixaResultado.style.backgroundColor = "#f51616";

    }

}

        




function resetarMensagens(){
    formulario.reset();
    txtResultado.innerHTML = "Olá, " + saudacao + "!";
    txtResultadoMsg.innerHTML = "Prencha os campos acima para obter o seu IMC."
    txtResultado.style.color = "black"
    txtResultadoMsg.style.color = "black"
    caixaResultado.style.backgroundColor = "lightgray";
}

function validarPreenchimento(){
    if ((altura.value == "") || (peso.value == "")){
        txtResultado.innerHTML = "Campos vazios!"
        caixaResultado.style.backgroundColor = "yellow";
    } else {
        calcularIMC();
    }
}





let hoje = new Date();
let horas = hoje.getHours();
let saudacao;

if (horas < 12) {
    saudacao = "Bom dia";
} else if (horas >= 12 && horas < 18) {
    saudacao = "Boa tarde";
} else {
    saudacao = "Boa noite";
}

txtResultado.innerHTML = "Olá, " + saudacao + "!";


btn.addEventListener("click", function(event){event.preventDefault(); validarPreenchimento();});
//Ao clicar no botão, a função anônima executa o "preventDefault()" que impede o comportamento padrão que é recarregar a página, logo em seguida chama a função "calcularIMC" responsável pelo cálculo do IMC
btn2.addEventListener("click", function(event){event.preventDefault(); resetarMensagens()});


