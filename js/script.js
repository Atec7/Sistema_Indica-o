document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('indicacaoForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const matricula = document.getElementById('matricula').value;
        const nomeSoftware = document.getElementById('nomeSoftware').value;
        const indicacao = document.getElementById('indicacao').value;
        const gerente = document.getElementById('gerente').value;
        const nomeCliente = document.getElementById('nomeCliente').value;
        const emailCliente = document.getElementById('emailCliente').value;
        const ServicoCliente = document.getElementById('ServicoCliente').value;
        const whatsappCliente = document.getElementById('whatsappCliente').value;

        const message = `*INDICAÇÃO PARA PRESTAÇÃO DE SERVIÇO* : \n *Matrícula:* ${matricula} \n *Nome Software Indicator:* ${nomeSoftware} \n *Gerente:* ${gerente} \n *Indicação:* ${indicacao} \n *Nome do Cliente:* ${nomeCliente} \n *E-mail do Cliente:* ${emailCliente} \n *Serviço/Software/Negócio do Cliente:* ${ServicoCliente} \n *WhatsApp do Cliente:* ${whatsappCliente}`;

        let whatsappUrl = '';

        if (gerente === 'ARNALDO S. LIMA') {
            whatsappUrl = `https://wa.me/5564992952748?text=${encodeURIComponent(message)}`;
        } else if (gerente === 'AGLAISIO BARROS') {
            whatsappUrl = `https://wa.me/559991216228?text=${encodeURIComponent(message)}`;
        } else if (gerente === 'JANDSON SILVA') {
            whatsappUrl = `https://wa.me/556484480171?text=${encodeURIComponent(message)}`;
        }

        window.open(whatsappUrl, '_blank');

        // Redirecionar para a página de carregamento
        window.location.href = 'login.html';
    });
});
