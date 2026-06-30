function verificarResposta(isCorrect) {
    const resultadoTexto = document.getElementById("resultado-quiz");

    if (isCorrect) {
        resultadoTexto.innerText = "Parabéns! 🎉 Essa é a atitude correta. Com a ascensão das ferramentas de IA, conteúdos falsos (como deepfakes) são gerados facilmente. Sempre cheque os fatos!";
        resultadoTexto.style.color = "#27ae60"; // Verde para acerto
    } else {
        resultadoTexto.innerText = "Ops, tente novamente! ❌ Compartilhar sem checar ajuda a espalhar desinformação, o que prejudica a cidadania digital.";
        resultadoTexto.style.color = "#c0392b"; // Vermelho para erro
    }
}
