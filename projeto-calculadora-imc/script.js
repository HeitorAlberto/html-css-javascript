//imc = peso / (altura x altura)


// SELEÇÃO DOS ITENS
let nome = document.querySelector("#cxnomeid");
let altura = document.querySelector("#cxalturaid");
let peso = document.querySelector("#cxpesoid");

let resultadoimc = "";
let txtResultado = document.querySelector("#txt-resultado");
let txtResultadoMsg = document.querySelector("#txt-resultado-msg");

let btn = document.querySelector("#btn-calcular"); //Seleciona o botão que calcula
let btn2 = document.querySelector("#btn-limpar"); //Seleciona o botão que limpa os campos





function calcularIMC(){
    

    resultadoimc = parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value) ) // resultado do imc salvo na variável
    
    if (resultadoimc < 18.5){
        txtResultado.innerHTML = "Resultado: " + resultadoimc.toFixed(2) + " (Magreza)"
        txtResultadoMsg.innerHTML = "Cuide-se, " + nome.value + ". Seu peso está abaixo do normal.";
        txtResultado.style.color = "red";
        txtResultadoMsg.style.color = "red";
    } else if (resultadoimc >= 18.5 && resultadoimc <= 24.9){
        txtResultado.innerHTML = "Resultado: " + resultadoimc.toFixed(2) + " (Normal)"
        txtResultadoMsg.innerHTML = "Boas notícias, " + nome.value + ". Seu peso está normal.";
        txtResultado.style.color = "green";
        txtResultadoMsg.style.color = "green";
    } else if (resultadoimc >= 25 && resultadoimc <= 30){
        txtResultado.innerHTML = "Resultado: " + resultadoimc.toFixed(2) + " (Sobrepeso)"
        txtResultadoMsg.innerHTML = "Cuide-se, " + nome.value + ". Seu peso está acima do normal.";
        txtResultado.style.color = "orange";
        txtResultadoMsg.style.color = "orange";
    } else if (resultadoimc > 30){
        txtResultado.innerHTML = "Resultado: " + resultadoimc.toFixed(2) + " (Obesidade)"
        txtResultadoMsg.innerHTML = "Atenção, " + nome.value + ". Seu peso muito acima do normal.";
        txtResultado.style.color = "red";
        txtResultadoMsg.style.color = "red";
    }

    
}

function limparCampos(){
    txtResultado.innerHTML = "Olá, " + saudacao + "!";
    txtResultadoMsg.innerHTML = "Prencha os campos acima para obter o seu IMC."
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

btn.addEventListener("click", function(event){event.preventDefault(); calcularIMC()});
//Ao clicar no botão, a função anônima executa o "preventDefault()" que impede o comportamento padrão que é recarregar a página, logo em seguida chama a função "calcularIMC" responsável pelo cálculo do IMC
btn2.addEventListener("click", function(event){event.preventDefault;limparCampos()});


