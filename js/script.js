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

const exercicio9 = () => {
  let soma = 0;

  for (let contador = 1; contador <= 100; contador++) {
    soma = soma + contador;
  }

  document.getElementById(
    "resposta"
  ).innerHTML += `<p>O total da soma é: ${soma}</p>`;
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
