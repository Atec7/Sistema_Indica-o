document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const gerente = document.getElementById('gerente').value.toUpperCase();
        const matricula = document.getElementById('matricula').value;

        const gerentesValidos = ['AGLAISIO', 'JANDSON', 'ARNALDO'];
        const matriculasValidas = [7777];

        for (let i = 7777; i <= 9999; i++) {
            matriculasValidas.push(i.toString());
        }

        if (gerentesValidos.includes(gerente) && matriculasValidas.includes(matricula)) {
            window.location.href = 'load.html';
        } else {
            alert('Gerente ou Matrícula inválidos. Por favor, tente novamente.');
        }
    });
});
