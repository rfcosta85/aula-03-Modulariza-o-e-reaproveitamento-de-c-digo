function processarNotificacao(mensagem, acaoEnviar) {
    console.log("Processando mensagem no sistema...");
    acaoEnviar(mensagem);
}

function enviarPorEmail(texto) {
    console.log(`[E-MAIL] Enviando: "${texto}"`);
}

function enviarPorSMS(texto) {
    console.log(`[SMS] Enviando: "${texto}"`);
}

processarNotificacao("Sua multa foi paga com sucesso!", enviarPorEmail);
processarNotificacao("Aviso de velocidade ultrapassada!", enviarPorSMS);

/* Callbacks em ações assíncronas */

console.log("1. Solicitando documento no portal do IMT...");

// O setTimeout recebe uma Arrow Function como callback e um tempo em milissegundos (2000ms = 2s)
setTimeout(() => {
    console.log("2. Documento processado e pronto para download!");
}, 2000);

console.log("3. O sistema continua rodando sem travar enquanto espera...");