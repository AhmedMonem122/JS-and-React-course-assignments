"use strict";

// Lab 1

// 1- Create a function that takes two numbers as arguments and returns their sum.

const addition = function (num1, num2) {
  return num1 + num2;
};

console.log(addition(3, 2));

console.log(addition(-3, -6));
console.log(addition(7, 3));

console.log("#".repeat(20));
// 2- Write a function that takes the base and height of a triangle and return its area.

const triArea = function (base, height) {
  return (base * height) / 2;
};

console.log(triArea(3, 2));

console.log(triArea(7, 4));

console.log(triArea(10, 10));

console.log("#".repeat(20));

// 3- Write a function that returns the string "something" joined with a space " " and the given argument a.

const giveMeSomething = function (a) {
  return `something ${a}`;
};

console.log(giveMeSomething("is better than nothing"));

console.log(giveMeSomething("Bob Jane"));

console.log(giveMeSomething("something"));
