//SELEÇÃO DOS ELEMENTOS
let nota1 = document.querySelector("#cx-nota1");
let nota2 = document.querySelector("#cx-nota2");
let media = 0;

let cxresultado = document.querySelector("#cx-resultado");

let btncalcular = document.querySelector("#btn-calcular");
let btnlimpar = document.querySelector("#btn-limpar-dados");

//ESCUTADOR DE EVENTO
btncalcular.addEventListener("click", function (event) {
  event.preventDefault();
  validarNotas();
});             //A função anonima que impede o comportamento padrão também chama as função que valida as notas

btnlimpar.addEventListener("click", limparDados);

//VALIDAÇÃO (SÓ SÃO PERMITDAS NOTAS ENTRE 0 E 10)
function validarNotas() {
  n1 = parseFloat(nota1.value);
  n2 = parseFloat(nota2.value);

  if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || isNaN(n1) == NaN || isNaN(n2)) {
    cxresultado.textContent = `[!] Adicione notas de 0 até 10 [!]`;
    cxresultado.style.backgroundColor = "yellow ";
  } else {
    calcularMedia(n1, n2);
  }
}

//CÁLCULO DA MÉDIA E IMPRESSÃO DO RESULTADO
function calcularMedia(n1, n2) {
  media = (n1 + n2) / 2;

  if (media >= 6) {
    cxresultado.textContent = `Média ${media}: - Aprovado!`;
    cxresultado.style.backgroundColor = "#33cc33";
  } else {
    cxresultado.textContent = `Média ${media}: - Recuperação!`;
    cxresultado.style.backgroundColor = "#ff471a";
  }
}

//LIMPAR OS DADOS DO FORMULÁRIO
function limparDados(){
    nota1.value = "";
    nota2.value = "";
    cxresultado.textContent = `Resultado aqui...`;
    cxresultado.style.backgroundColor = "lightgray";
}
