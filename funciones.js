//Yo tengo una lista de comidas preferidas y me gustaría saber a través de una función cual fue la primera comida que añadi
let food = ["ice cream", "pizza", "hamburger", "stew", "water melon", "salt"];

function firstElement(list) {
  console.log('Firts Element ' + food[0]);
}

firstElement(food);

//a traves de otra función que me ordene de la ultima introducida la primera, es decir orden inverso

function listReverse(list) {
  food.reverse();
  console.log("REVERSE " + food);
}

listReverse(food);

//otra función que me ordene mis comidas preferidas en orden alfabetico

function sortList(list) {
  food.sort();
  console.log("SORT " + food);
}

sortList(food);

