// Função para validar o formulário
function validarFormulario(event) {
    // Previne o envio do formulário
    event.preventDefault();

    // Seleciona os campos do formulário
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('emailCompra').value;
    const telefone = document.getElementById('telefone').value;

    // Validação simples (verificar se os campos não estão vazios)
    if (!nome || !sobrenome || !cpf || !email || !telefone) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false;
    }

    // Validação do e-mail (verifica o formato)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return false;
    }

    // Validação do CPF (verifica se o CPF é um número e tem 11 dígitos)
    if (!/^\d{11}$/.test(cpf)) {
        alert('Por favor, insira um CPF válido (11 dígitos).');
        return false;
    }

    // Validação do telefone (verifica se o telefone tem apenas números)
    if (!/^\d{10,11}$/.test(telefone)) {
        alert('Por favor, insira um número de telefone válido.');
        return false;
    }

    // Se todos os campos estiverem válidos, envia o formulário
    alert('Compra finalizada com sucesso!');
    document.getElementById('formCompra').submit();
}