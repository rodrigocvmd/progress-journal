console.log("Iniciando o script!"); // 1º a executar

setTimeout(() => {
  console.log("Isso apareceu depois de 2 segundos!"); // 3º a executar
}, 2000); // 2000 milissegundos = 2 segundos

console.log("Script finalizado!"); // 2º a executar