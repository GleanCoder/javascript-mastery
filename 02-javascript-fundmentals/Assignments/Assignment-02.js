/*
Function Declarations vs. Expressions﻿

1. The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

2. To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

3. Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

4. Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).


*/

function percentageOfWorld1(country, population) {
  const WorldPopulation = 7900;
  const populationPercent = ((population / WorldPopulation) * 100).toFixed(2);
  return ` ${country} has ${population} million people, so it's about ${populationPercent}% of the world population.`;
}
const countryJapan = percentageOfWorld1("Japan", 123);
const countryBrazil = percentageOfWorld1("Brazil", 216);
const CountryIndia = percentageOfWorld1("India", 1464);

console.log(CountryIndia);
console.log(countryJapan);
console.log(countryBrazil);

const percentageOfWolrd2 = function (country, population) {
  const populationPercent = ((population / 7900) * 100).toFixed(2);
  return ` ${country} has ${population} million people, so it's about ${populationPercent}% of the world population.`;
};
const countryChina = percentageOfWolrd2("China", 1446);
const countryUsa = percentageOfWolrd2("USA", 236);
const CountryRussia = percentageOfWolrd2("Russia", 200);

console.log(countryChina);
console.log(countryUsa);
console.log(CountryRussia);
