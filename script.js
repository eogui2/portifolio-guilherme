// Espera o DOM estar completamente carregado para garantir que os elementos estejam disponíveis para manipulação
document.addEventListener('DOMContentLoaded', function() {
    // Obtém o formulário pelo id "contact-form"
    const form = document.getElementById('contact-form');
    
    // A função de envio do formulário
    form.addEventListener('submit', function(event) {
      // Impede que a página seja recarregada ao enviar o formulário
      event.preventDefault();
  
      // Obtém os valores dos campos de entrada
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const mensagem = document.getElementById('mensagem').value;
  
      // Valida os campos (checa se estão preenchidos)
      if (nome === '' || email === '' || mensagem === '') {
        // Exibe uma mensagem de erro se algum campo estiver vazio
        alert('Por favor, preencha todos os campos do formulário.');
        return; // Interrompe a execução da função se algum campo estiver vazio
      }
  
      // Exibe uma mensagem de sucesso
      alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso!`);
  
      // Limpa os campos após o envio
      form.reset();
    });
  });
  