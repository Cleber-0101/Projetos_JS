const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")
const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeImg = document.querySelector("#qr-code img")
const tituloPrincipal = document.querySelector(".titulo")

// Função principal que chama a API
function geradorQrCode() {
    const qrCodeInputValue = qrCodeInput.value;

    if (!qrCodeInputValue) return; // se estiver vazio, sai da função

    qrCodeBtn.innerHTML = "Gerando código.....";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    // Só mostra o QR Code quando a imagem carregar
    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innerHTML = "Qr-code criado!";

        // Só altera o título depois de 2 segundos
        retornartituloPrincipal();
    });
}

// Evento de clique no botão
qrCodeBtn.addEventListener("click", () => {
    geradorQrCode();
    inputVazio();
});

// Evento de Enter no teclado
qrCodeInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        geradorQrCode();
    }
    inputVazio();
});

// Evento de limpar o input
qrCodeInput.addEventListener("keyup", () => {
    if (!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.innerHTML = "Gerar QR Code";
        tituloPrincipal.innerHTML = "Ops! Digite para gerar...";
    }
    inputVazio();
});

// Função que muda o título depois que gerar o QR
function retornartituloPrincipal() {
    setTimeout(() => {
        tituloPrincipal.innerHTML = "Qr code criadoooooo";
    }, 1000); // 2 segundos
}

// Função para mostrar mensagem se input estiver vazio
function inputVazio() {
    if (qrCodeInput.value === "") {
        tituloPrincipal.innerHTML = "Ops! Digite para gerar...";
    }
}
