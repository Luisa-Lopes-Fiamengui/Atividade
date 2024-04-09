const exercicio1 = () => {
  for (let i = 0; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `#${i} `;
  }
};

const exercicio2 = () => {
  let num = document.getElementById("num").value;
  document.getElementById("resultado").innerHTML = "";
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) document.getElementById("resultado").innerHTML += `#${i} `;
  }
};

const exercicio3 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (num <= 0) {
    error.innerText = `informar número válido, o número ${num} não é positivo.`;
    result.innerText = "";
  } else {
    error.innerText = "";
    let primo = true;
    for (let i = 2; i < num; i++) {
      if (num % i == 0) primo = false;
    }

    primo
      ? (result.innerText = `o numero ${num} é primo`)
      : (result.innerText = `o numero ${num} NÃO é primo`);
  }
};

const exercicio4 = () => {
  let num = document.getElementById("num").value;
  document.getElementById("resultado").innerHTML = "";
  for (let i = 0; i <= 10; i++) {
    document.getElementById("resultado").innerHTML += `${num} x ${i} = ${
      num * i
    } <br>`;
  }
};

const exercicio5 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");

  console.log(num);
  let contador = 0;
  result.innerText = "";

  while (contador <= num) {
    if (contador % 2 != 0) {
      document.getElementById("resultado").innerText += ` # ${contador}`;
    }
    contador++;
  }
};

const exercicio6 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");

  result.innerText = "";
  let contador = 0;
  let soma = 0;

  while (contador <= num) {
    if (contador % 2 == 0) {
      soma = soma + contador;
    }
    contador++;
  }
  document.getElementById("resultado").innerText += ` # ${soma}`;
};

const exercicio7 = () => {
  let result = document.getElementById("resultado");
  let contador = 10;

  console.log(contador);
  while (contador >= 1) {
    result.innerText += ` # ${contador}`;
    contador--;
  }
};

const exercicio8 = () => {
  let palavra = document.getElementById("palavra").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  let inversa = "";

  for (let i = 1; i <= palavra.length; i++) {
    inversa += palavra.charAt(palavra.length - i);
  }

  palavra.toLowerCase() == inversa.toLowerCase()
    ? (result.innerText = "A palavra é um palíndromo!")
    : (error.innerText = "A palavra não é um palíndromo!");
};

const exercicio9 = () => {
  let soma = 0;

  for (let contador = 1; contador <= 100; contador++) {
    soma = soma + contador;
  }

  document.getElementById(
    "resposta"
  ).innerHTML += `<p>O total da soma é: ${soma}</p>`;
};

const exercicio10 = () => {
  let soma = 0;
  let num = document.getElementById("num").value;
  let contador = 0;

  while (contador <= num) {
    soma += contador;
    contador++;
  }
  let media = soma / num;
  console.log(soma);
  console.log(media);
};

const exercicio11 = () => {
  let result = document.getElementById("resposta");

  let contador = 0;

  while (contador <= 100) {
    if (contador % 3 == 0) {
      document.getElementById(
        "resposta"
      ).innerHTML += ` <span> ${contador} </span>`;
    }
    contador++;
  }
};

const exercicio12 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let soma = 0;
  let digitos = num.length;

  for (let i = 0; i < digitos; i++) {
    soma = parseInt(soma) + parseInt(num[i]);
  }
  result.innerHTML = `A soma dos digitos é: ${soma}`;
};

const exercicio13 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  document.getElementById("resultado").innerText = "";

  for (let i = num1; i <= num2; i++) {
    let result = verificaPrimo(i);
    if (result) {
      document.getElementById("resultado").innerText += ` #${i} `;
    }
  }
  function verificaPrimo(numero) {
    let primo = true;
    for (let i = 2; i < numero; i++) {
      if (numero % i == 0) primo = false;
    }
    return primo;
  }
};

const exercicio14 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  document.getElementById("resultado").innerText = `A área de um retângulo é: ${
    num1 * num2
  }`;
};

const exercicio15 = () => {
  let palavra = document.getElementById("palavra").value;
  let result = document.getElementById("resultado");

  palavra = palavra.toLowerCase();
  let vogais = "";
  let consoantes = "";

  for (let i = 0; i < palavra.length; i++) {
    if (
      palavra[i] == "a" ||
      palavra[i] == "e" ||
      palavra[i] == "i" ||
      palavra[i] == "o" ||
      palavra[i] == "u"
    ) {
      vogais += ` ${palavra[i]}`;
    } else {
      consoantes += ` ${palavra[i]}`;
    }
  }

  result.innerText = `Vogais: ${vogais} - Consoantes: ${consoantes}`;
};

const exercicio16 = () => {
  let num1 = document.getElementById("num1").value;
  document.getElementById("resultado").innerText = `A área de um circulo é: ${
    num1 * 3.14
  }`;
};

const exercicio17 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  document.getElementById("resultado").innerText = `A área de um triangulo é: ${
    (num1 * num2) / 2
  }`;
};

const exercicio18 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;

  document.getElementById("resultado").innerText = `A área de um trapézio é: ${
    ((num1 + num2) * num3) / 2
  }`;
};

const exercicio19 = () => {
  let dataNascimento = document.getElementById("data").value;

  const dataNasc = new Date(dataNascimento);
  const dataAtual = new Date();
  const diferencaMS = dataAtual.getTime() - dataNasc.getTime();
  const idade = Math.floor(diferencaMS / (1000 * 60 * 60 * 24 * 365.25));

  document.getElementById("resultado").innerText = `${idade} anos`;
};

const exercicio20 = () => {
  let frase = document.getElementById("frase").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  let inversa = "";

  for (let i = 1; i <= frase.length; i++) {
    inversa += frase.charAt(frase.length - i);
  }
  result.innerText = inversa;
};

const exercicio21 = () => {
  let frase = document.getElementById("frase").value;
  let result = document.getElementById("resultado");

  let palavras = frase.split(" ");
  let fraseSemEspaco = palavras.join("");

  result.innerText = fraseSemEspaco;
};

let soma = 0;
const exercicio22 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");

  if (soma <= 100) {
    soma += parseFloat(num);
  }

  result.innerText = `A soma é ${soma}`;
};

const exercicio23 = () => {
  let frase = document.getElementById("frase").value;
  let palavra = document.getElementById("palavra").value;
  let result = document.getElementById("resultado");

  let palavrasDaFrase = frase.split(" ");
  let qtdPalavras = palavrasDaFrase.length;
  let contador = 0;

  for (let i = 0; i < qtdPalavras; i++) {
    if (palavrasDaFrase[i] == palavra.trim()) {
      contador++;
    }
  }

  result.innerText = `A palavra ${palavra} apareceu na frase ${contador} vezes.`;
};

const exercicio24 = () => {
  let frase = document.getElementById("frase").value;
  let result = document.getElementById("resultado");

  frase = frase.toLowerCase();
  let palavrasDaFrase = frase.split(" ");
  let qtdPalavras = palavrasDaFrase.length;
  let novapalavra = [];

  for (let i = 0; i < qtdPalavras; i++) {
    novapalavra[i] =
      palavrasDaFrase[i].charAt(0).toUpperCase() + palavrasDaFrase[i].slice(1);
  }

  novafrase = novapalavra.join(" ");
  result.innerText = novafrase;
};

const exercicio25 = () => {
  let num1 = document.getElementById("num1").value
  let num2 = document.getElementById("num2").value
  let num3 = document.getElementById("num3").value
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  resultado.innerText = ""
  error.innerText = ""

  let numeros = [num1, num2, num3];

  numeros.sort((a, b) => a - b)

  if (num1 == "" || num2 == "" || num3 == ""){
    error.innerText = "mermão, coloca número ae porra"
  }else{
    error.innerText = ""
    result.innerText = numeros
  }
}