//1. Escreva uma função soma que retorna a soma dos números de um array usando spread operator
//array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];

const { access } = require("node:fs");

const array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];
const soma = ((...resultado) => resultado.reduce((access, next) => access + next, 0));
soma(...array)






//Exercicio 2

async function req(){
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
    const json = await res.json();
    const value = json.meals[0]



    const ficha ={
     nome: value.strMeal,
     id: value.idMeal,
     regiao: value.strArea,
     instrucoes: value.strInstructions,
     ingredirntes: `${value.strIngredient1}, ${value.strIngredient2}, ${value.strIngredient3}, ${value.strIngredient4}, ${value.strIngredient5}, ${value.strIngredient6}, ${value.strIngredient7}, ${value.strIngredient8}, ${value.strIngredient9},`
    }
    console.log(ficha)
  }
  
  req()

  //Exercicio 3

  async function list (){
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood&results=10')
    const json = await res.json();
    const meals = json.meals
    const result = meals.slice(0,10);
    console.log(result)
 }
 list()