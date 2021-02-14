/*

You are running a classroom and suspect that some of your students are passing around the answers to multiple choice questions disguised as random strings.

Your task is to write a function that, given a list of words and a string, finds and returns the word in the list that is scrambled up inside the string, if any exists. There will be at most one matching word. The letters don't need to be contiguous.
*/

"use strict";


const words = ["cat", "baby", "dog", "bird", "car", "ax"];
const string1 = "tcabnihjs";
const string2 = "tbcanihjs";
const string3 = "baykkjl";
const string4 = "bbabylkkj";
const string5 = "ccc";
const string6 = "breadmaking";


function find_embedded_word(words, str) {
  const wordArrLen = words.length;
  let wordFound = false;
  for (let i=0; i<wordArrLen; i++) {
    let word = words[i];
    let tempArr = word.split('');
    console.log(tempArr);
    let res = tempArr.map( (letter) => {
      return (str.includes(letter) ? true : false);
    })
   var findWordCallback = (currentValue) => currentValue === true;
   console.log("ISEVERY -->  ",res.every(findWordCallback))
   if (res.every(findWordCallback) === true) {
    wordFound = true;
    break;
   }
  }
  // words.forEach((word) => {
    
  // })
  return wordFound;
}

console.log(find_embedded_word(words, string1));
