// Desafio 1
function compareTrue(girafa, macaco) {
  if (macaco && girafa) {
    return true;
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado
}

// Desafio 3
function splitSentence(frases) {
  return frases.split (' ');
}

// Desafio 4
function concatName(array) {
  let resultado2 = array[array.length -1] + ', ' + array[0];
  return resultado2;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosTotais = (wins * 3) + (ties *1);
  return pontosTotais
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posicaoCat1 = Math.abs(mouse - cat1);
  let posicaoCat2 = Math.abs(mouse - cat2);

  if (posicaoCat1 < posicaoCat2) {
    return 'cat1'
  } else if (posicaoCat2 < posicaoCat1) {
    return 'cat2'
  } else if (posicaoCat1 == posicaoCat2)
    return 'os gatos trombam e o rato foge'
  }

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
