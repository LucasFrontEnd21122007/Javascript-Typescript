// Criando uma Promise
const minhaPromise = new Promise((resolve, reject) => {
    // Simulando uma operação assíncrona (por exemplo, uma requisição AJAX)
    setTimeout(() => {
      const sucesso = true; // Defina isso com base no resultado da operação
      if (sucesso) {
        resolve("Operação bem-sucedida");
      } else {
        reject("Operação falhou");
      }
    }, 2000); // Simulando um atraso de 2 segundos
  });
  
  // Usando a Promise
  minhaPromise
    .then((resultado) => {
      console.log("Sucesso: " + resultado);
    })
    .catch((erro) => {
      console.error("Erro: " + erro);
    });
  