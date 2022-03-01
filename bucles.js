// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

let numberList = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let index = 0; index < numberList.length; index++) {
  let element = numberList[index];
  console.log(element);
}

// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo
// cuando el resto del numero dividido entre 2 sea 0.

let numberList2 = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let index = 0; index < numberList2.length; index++) {
    if (numberList2[index] % 2 === 0) {
        console.log(index + " dividido entre 2 el resto es 0");
    }
        
}


// 1.3 Crea un bucle para conseguir dormir contando ovejas.
// Este bucle empieza en 0 y termina en 10.
// Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle
// y cambia el mensaje en la última vuelta a 'Dormido!'.

let numberList3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let index = 0; index < numberList3.length; index++) {
  if (numberList3[index] === 10) {
    console.log('Dormido');
  }
  else {
    console.log('Intentando dormir')
  }
}
