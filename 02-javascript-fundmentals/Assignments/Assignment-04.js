/*
Functions Calling Other Functions﻿

1. Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

2. To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

3. Call describePopulation with data for 3 countries of your choice.

*/

const percentageOfWorld1 = (population) => (population / 7900) * 100;
function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world`;
}

const countryIndia = describePopulation("India", 1552);
const countryChina = describePopulation("China", 1441);
const countryRussia = describePopulation("Russia", 456);

console.log(countryIndia, "\n", countryRussia, "\n", countryChina);
