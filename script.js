function checarResposta(tipoResposta) {
    // Busca o elemento de texto onde vamos mostrar o resultado
    const caixaResultado = document.getElementById("mensagem-resultado");
    
    // Torna a caixinha de texto visível na tela
    caixaResultado.style.display = "block";

    // Verifica qual botão o usuário clicou e muda o texto/cor
    if (tipoResposta === 'correto') {
        caixaResultado.innerText = "Excelente escolha! 🌟 Com as tecnologias de IA gerativa, imagens falsas parecem reais. Checar canais oficiais e sites de checagem de fatos é a melhor atitude de um cidadão digital.";
        caixaResultado.style.backgroundColor = "#d4edda";
        caixaResultado.style.color = "#155724";
        caixaResultado.style.border = "1px solid #c3e6cb";
    } else if (tipoResposta === 'errado') {
        caixaResultado.innerText = "Cuidado! ❌ Compartilhar sem checar espalha boatos e desinformação, o que pode prejudicar pessoas e causar pânico desnecessário.";
        caixaResultado.style.backgroundColor = "#f8d7da";
        caixaResultado.style.color = "#721c24";
        caixaResultado.style.border = "1px solid #f5c6cb";
    } else {
        caixaResultado.innerText = "Atenção! ⚠️ Atacar ou xingar alguém online quebra a regra de ouro da cidadania digital (a empatia), mesmo que a imagem fosse real.";
        caixaResultado.style.backgroundColor = "#fff3cd";
        caixaResultado.style.color = "#856404";
        caixaResultado.style.border = "1px solid #ffeeba";
    }
}
