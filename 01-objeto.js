const veiculos = ["Toyota Corolla 2023-D", "Honda Nmax 2025"];

const toyota = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2023,
  cor: "Prata",
  combustivel: "Diesel",
};

const honda = {
  marca: "Honda",
  modelo: "Nmax",
  ano: 2025,
  cor: "Verde",
  cilindrada: 125,
  combustivel: "Gasolina",
};

const utilizador = {
  nome: "João Silva",
  idade: 30,
  email: "joao.silva@example.com",
  morada: {
    rua: "Rua das Flores",
    numero: 123,
    Distrito: "Braga",
    Cidade: "Barcelos",
    Município: "Barcelos",
    Pais: "Portugal",
    cep: "01310-100"
  },
  acessibilidade: false,
  nacionalidade: "Portuguesa",  
};

const infracoes = {
    tipo: "Excesso de velocidade",
    data: "12-05-2026",
    valor: "€150.00",
    descricao: "O condutor excedeu o limite de velocidade permitido na via.",
    local: "Avenida Principal, Barcelos",
    status: "Pendente",
    pontos: 3
}

const marca = toyota.marca;
const modelo = toyota.modelo;
const ano = toyota.ano;
const cor = toyota.cor;

console.log("================================");
console.log("Portal IMT");
console.log("================================");

console.log("------------------------------------------------------------");
console.log(`Olá, ${utilizador.nome} seja bem-vindo ao Portal IMT`);
console.log("Abaixo seguem as informações do seu veículo:");
console.log("------------------------------------------------------------");
console.log("Você possui o total de " + veiculos.length + " veículos cadastrados:");
console.log("------------------------------------------------------------");
console.log(`Marca: ${marca}`);
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
console.log(`Combustível: ${honda.combustivel}`);
console.log("------------------------------------------------------------");
console.log("Informações adicionais:");
console.log("Infrações:");
console.log("Detalhes:");
console.log("tipo de infração: " + infracoes.tipo);
console.log("data da infração: " + infracoes.data);
console.log("valor da infração: " + infracoes.valor);
console.log("descrição da infração: " + infracoes.descricao);
console.log("local da infração: " + infracoes.local);
console.log("status da infração: " + infracoes.status);
console.log("pontos da infração: " + infracoes.pontos);
console.log("------------------------------------------------------------");
console.log("Detalhes para faturação:");
console.log("Nome: " , utilizador.nome);
console.log("morada:", utilizador.morada.rua, "Nº:", 
    utilizador.morada.numero, ",", "Distrito:", utilizador.morada.Distrito, ",", 
    "Cidade:", utilizador.morada.Cidade, ",", 
    "Código Postal: ", utilizador.morada.cep);
console.log("------------------------------------------------------------");
console.log("Possui acessibilidade: " + (utilizador.acessibilidade ? "Sim" : "Não"));
