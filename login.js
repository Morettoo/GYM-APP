document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    // Captura os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const password = document.getElementById('password').value;

    // Validação simples
    if (name === "" || email === "" || age === "" || password === "") {
        displayMessage("Por favor, preencha todos os campos.", "error");
        return;
    }

    if (!validateEmail(email)) {
        displayMessage("Por favor, insira um e-mail válido.", "error");
        return;
    }

    if (password.length < 6) {
        displayMessage("A senha deve ter no mínimo 6 caracteres.", "error");
        return;
    }

    // Exibe a mensagem de sucesso
    displayMessage("Cadastro realizado com sucesso!", "success");

    // Limpa o formulário
    document.getElementById('profileForm').reset();
});

// Função para validar o e-mail
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Função para exibir mensagens
function displayMessage(message, type) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.className = type === "success" ? "message success" : "message error";
}
