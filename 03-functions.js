/* Exemplos Function declaration */

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' });
}

const coima = 150.00;
console.log("O total a pagar em coimas é de: ", formatarMoeda(coima));

function aplicarDesconto(valor, desconto, associado) {
    return associado ? valor * (1 - desconto) : valor;
}

const valorOriginal = 150.00;
const desconto = 0.10;
const associado = true;

console.log("O valor com desconto é de: ", 
    formatarMoeda(aplicarDesconto(valorOriginal, desconto, associado)));

/* Exemplos Function expression */

validaMinimoDeCaracteres = function (texto, minimo, maximo) {
    return typeof texto === 'string' && texto.trim().length >= minimo &&
     (maximo === undefined || texto.length <= maximo);
}

console.log("Validação de caracteres:", validaMinimoDeCaracteres("Rui", 2));
console.log("Validação de matrícula veícular:", validaMinimoDeCaracteres("ABXL12", 6, 6));

/* Hoisting */

exemplo();
function exemplo() {
    console.log("Exemplo de função declarada");
}

/* exemplo2();
 */
const exemplo2 = function() {
    console.log("Exemplo de função expressa");
}

/* Arrow functions */

// 1. Sintaxe Tradicional (Function Expression)
const eEletricoTradicional = function (combustivel) {
    return combustivel === "Elétrico";
};


// 2. Arrow Function Completa
const eEletricoArrow = (combustivel) => {
    return combustivel === "Elétrico";
};

// 3. Arrow Function Curta (Retorno Implícito - Ideal para a aula)
const eEletrico = combustivel => combustivel === "Elétrico";