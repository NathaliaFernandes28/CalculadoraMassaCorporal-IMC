const { error } = require("console");

function IMC(peso, altura) {
  return new Promise((resolve, reject) => {
    //Para verificarmos se os parametros peso e altura que serão inseridos são do tipo number, temos que usar o metodo typeof.//
    if (typeof peso !== `number` || typeof altura !== `number`) {
      reject(`Número inserido inválido`);
    } else {
      let calculoImc = peso / (altura * altura);
      resolve(calculoImc);
    }
  });
}

function SecondFunction(nome, idade, peso, altura) {
  return IMC(peso, altura)
    .then((calculoImc) => {
      let situacao;
      if (calculoImc < 18) {
        situacao = "Magreza";
      } else if (calculoImc >= 18 && calculoImc < 25) {
        situacao = "Normal";
      } else if (calculoImc >= 25 && calculoImc < 30) {
        situacao = "Sobrepeso";
      } else if (calculoImc >= 30 && calculoImc < 40) {
        situacao = "Obesidade";
      } else if (calculoImc >= 40) {
        situacao = "Obesidade Grave";
      }
      console.log(`Paciente: ${nome} | Idade: ${idade} anos `);
      console.log(`IMC: ${calculoImc.toFixed(2)} | Situação: ${situacao}`);
    })
    .catch((error) => {
      console.error(`Erro: ${error}`);
    });
}
SecondFunction("Nathalia Fernandes", 31, 90, 1.64);
SecondFunction("Enaura Fernandes", 90, 78, 1.7);
SecondFunction("Rosane Fernandes", 58, 72, 1.64);
SecondFunction("Benjamin Oliveira ", 60, 90, 1.7);
SecondFunction("Lucas Fernandes", 29, 70, 1.74);
