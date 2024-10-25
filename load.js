document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        window.location.href = 'index.html'; // Redirecionar para a página index.html após 5 segundos
    }, 5000);

    // Efeito de escrita
    const typingEffectElement = document.querySelector('.typing-effect');
    const text = "";
    let index = 0;

    function type() {
        if (index < text.length) {
            typingEffectElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    type();
});
