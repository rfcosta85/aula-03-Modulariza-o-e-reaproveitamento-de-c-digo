const veiculos = [
  {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2023,
    cor: "Prata",
    combustivel: "Diesel"
  },
  {
    marca: "Honda",
    modelo: "Nmax",
    ano: 2025,
    cor: "Verde",
    cilindrada: 125,
    combustivel: "Gasolina"
  }
];

const utilizador = {
  nome: "João Silva",
  idade: 30,
  email: "joao.silva@example.com",
  morada: 
  [
    {
        rua: "Rua das Flores",
        numero: 123,
        Distrito: "Braga",
        Cidade: "Barcelos",
        Município: "Barcelos",
        Pais: "Portugal",
        postalCode: "01310-100"
    }
  ],
  acessibilidade: false,
  nacionalidade: "Portuguesa",  
};

const infracoes = [
    {
        tipo: "Excesso de velocidade",
        data: "12-05-2026",
        valor: "€150.00",
        descricao: "O condutor excedeu o limite de velocidade permitido na via.",
        local: "Avenida Principal, Barcelos",
        status: "Pendente",
        pontos: 3
    },
    {
        tipo: "Estacionamento proibido",
        data: "20-06-2026",
        valor: "€100.00",
        descricao: "O condutor estacionou em local proibido.",
        local: "Rua das Flores, Barcelos",
        status: "Pendente",
        pontos: 2
    }
];

/* const marca = toyota.marca;
const modelo = toyota.modelo;
const ano = toyota.ano;
const cor = toyota.cor; */


console.log("================================");
console.log("Portal IMT");
console.log("================================");

console.log("------------------------------------------------------------");
console.log(`Olá, ${utilizador.nome} seja bem-vindo ao Portal IMT`);
console.log("Abaixo seguem as informações do seu veículo:");
console.log("------------------------------------------------------------");
console.log("Você possui o total de " + veiculos.length + " veículos cadastrados:");
console.log("------------------------------------------------------------");
/* console.log(`Marca: ${marca}`);
console.log(`Modelo: ${modelo}`);
console.log(`Ano: ${ano}`);
console.log(`Cor: ${cor}`);
console.log(`Combustível: ${toyota.combustivel}`);
console.log("------------------------------------------------------------");
console.log(`Marca: ${honda.marca}`);
console.log(`Modelo: ${honda.modelo}`);
console.log(`Ano: ${honda.ano}`);
console.log(`Cor: ${honda.cor}`);
console.log(`Cilindrada: ${honda.cilindrada}`);
console.log(`Combustível: ${honda.combustivel}`); */
console.log("------------------------------------------------------------");

for(let i = 0; i < veiculos.length; i++){
    console.log("Marca:", veiculos[i].marca);
    console.log("Modelo:", veiculos[i].modelo);
    console.log("Ano:", veiculos[i].ano);
    console.log("Cor:", veiculos[i].cor);
    console.log("Combustível:", veiculos[i].combustivel);    
    veiculos[i].cilindrada ? console.log("Cilindrada:", veiculos[i].cilindrada) : "";
}
/* console.log("------------------------------------------------------------"); */

const total = infracoes.length;

if (total === 0) {
    console.log("Você não possui infrações registradas.");
} else {
    const termo = total === 1 ? "infração registrada" : "infrações registradas";
    console.log(`Você possui ${total} ${termo}.`);
}
console.log("Detalhes:");

for(let i = 0; i < infracoes.length; i++){
    console.log("tipo de infração: " + infracoes[i].tipo);
    console.log("data da infração: " + infracoes[i].data);
    console.log("valor da infração: " + infracoes[i].valor);
    console.log("descrição da infração: " + infracoes[i].descricao);
    console.log("local da infração: " + infracoes[i].local);
    console.log("status da infração: " + infracoes[i].status);
    console.log("pontos da infração: " + infracoes[i].pontos);
}
console.log("------------------------------------------------------------");

console.log("Detalhes para faturação:");
console.log("Nome: " , utilizador.nome);

for(let i = 0; i < utilizador.morada.length; i++){
    console.log("morada:", utilizador.morada[i].rua, "Nº:", utilizador.morada[i].numero, ",", "Distrito:", utilizador.morada[i].Distrito, ",", 
    "Cidade:", utilizador.morada[i].Cidade, ",", 
    "Código Postal: ", utilizador.morada[i].postalCode);
}
console.log("------------------------------------------------------------");

console.log("Possui acessibilidade: " + (utilizador.acessibilidade ? "Sim" : "Não"));

utilizador.idade = 31;
console.log("Idade atualizada:", utilizador.idade);