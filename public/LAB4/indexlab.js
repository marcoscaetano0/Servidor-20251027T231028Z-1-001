let numeroSecreto = Math.floor(Math.random() * 100);

function verificar() {
  let chute = parseInt(document.getElementById("inputNumero").value);
  let mensagem = document.getElementById("mensagem");

  if (chute === numeroSecreto) {
    mensagem.innerText = "Parabéns! Você acertou!";
    document.body.style.setProperty("background-color", "green");
  } else {
    if (chute > numeroSecreto) {
      mensagem.innerText = "Tente um número menor.";
    } else {
      mensagem.innerText = "Tente um número maior.";
    }

    document.body.style.setProperty("background-color", "red");
  }
}