"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  // algo
  let arrayBin = num.split('');

  let sum = 0;
  for(let i = 0; i < arrayBin.length; i++) {
    sum = sum + Math.pow(2, arrayBin.length - 1 - i) * arrayBin[i];
  }
  return sum; 
}

function DecimalABinario(num) {
  // tu codigo aca
 let arrayBina = [];

 while(num > 0) {
   arrayBina.unshift(num%2);
    num = Math.floor(num/2);
 }
 return arrayBina.join(''); 
}

// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
