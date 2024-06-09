# Comandos importantes de JavaScript!

# SELECIONAR ELEMENTO(S) COM O QUERYSELECTOR
  elementoSelecionado.querySelector(“h1”)   
  elementoSelecionado.querySelector(“#titulo”) (seleciona pelo id “titulo”)
  elementoSelecionado.querySelectorAll(“h1”)  (seleciona todos os h1)


# ADICIONAR E REMOVER CLASSES
  elementoSelecionado.classList.add(“nome da classe”)
  elementoSelecionado.classList.Remove(“nome da classe”)


# ESCUTADOR DE EVENTOS
  elementoSelecionado.addEventListener(“evento”, nomeDaFunção)


# ARROW FUNCTION (FUNÇÃO ANÔNIMA)
  const minhaFuncao = (...) =>  uma ação qualquer…
  const minhaFuncao = (...) =>  {duas ou mais ações quaisquer…}
  // As chaves são obrigatórias caso haja duas ou mais ações dentro do bloco de códigos da função.


# EVENTOS
  Método 1: <p onMouseOver = “minhaFuncao()”></p>
  Método 2:  elementoSelecionado.addEventListener(“MouseOver”, minhaFuncao)
  Alguns eventos: onLoad, onMouseOver, onClick, onFocus, onFocusOut, onKeyPress… 


# OPERADOR CONDICIONAL TERNÁRIO
  condição ? comandos se verdadeiro : comandos se falso


# CRIANDO E ADICIONANDO ELEMENTO HTML
  Criação: let x = document.createElement("p")
  Exemplo 1: document.body.appendChild(x)
  Exemplo 2: elementoPaiSelecionado.appendChild(x)


# ESTRUTURA DE REPETIÇÃO FOR EACH
  nomeDoArray.forEach(function(elemento, index, array){console.log(elemento)};
  Obs. 1: Alternativa ao loop FOR.
  Obs. 2: “index” e “array” são parâmetros opcionais.
