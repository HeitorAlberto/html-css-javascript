let cursos = ['HTML', 'CSS', 'JavaScript', 'Java', 'Python'];

let somar = (numero1, numero2) => {
    let resultado = numero1 + numero2;
    console.log(`A soma entre ${numero1} e ${numero2} é: ${resultado}`);
}

export {cursos, somar}; //Exportação do Array e da função somar()