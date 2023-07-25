// Desafio 11
function generatePhoneNumber(array) {
    for (let index = 0; index < array.length; index += 1) {
      let ddd = array[0, 1];
      let number = array[2, 3, 4, 5, 6, 7, 8, 9, 10];
      return (ddd + number)
      if (array.length > 11) {
        return 'Array com tamanho incorreto.'
    }
  }
}


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true
  } else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    return true 
  } else if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    return true
  } else {
    return false
  }
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
