function abToMorse(str) {
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
   "t", "u", "v", "w", "x", "y", "z", " "];
  var morse = [".-", "-..", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...",
   "-", "..-", "...-", ".--", "-..-", "-.--", " "];
  var temp = "";
  for(i = 0; i < str.length; i++) {
    //makes a one-character string and finds its index in the alphabet array, then uses that index to find the morse code equivalent
    temp += morse[alphabet.indexOf(str.substring(i, i+1))];
  }


  return temp;
}




// function getM(str) {
//   var ar = [];
//   ar.push(str.substring(0, 2));
//   var psi = 3;
//   for (var i = 4; i < str.length; i++) {
//     if (str.charAt(i) === " ") {
//       ar.push(str.substring(psi, i));
//       psi = i +1;
//     }
//   }
//
//   return ar;
// }
//
// console.log(getM(".- -.. -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --.."));




//
// function getA(string) {
//   var newArray = [];
//   for (var i = 0; i < string.length; i++) {
//     newArray.push(string.charAt(i));
//   }
//
//
//   return newArray;
// }
//
// console.log(getA("abcdefghijklmnopqrstuvwxyz"));
//



//
//
// function findLargest(words) {
//   var max = words[0].length;
//   for (var i = 1; i < words.length; i++) {
//     if (words[i].length > max) {
//       max = words[i].length;
//     }
//   }
//   return max;
// }
//
// function niceRegularBox(words) {
//   var width = findLargest(words);
//   var height = words.length;
//   var sep = 0;
//   console.log("-".repeat(width));
//
//   for (var i = 0; i < height; i ++) {
//      sep = width - words[i].length;
//      console.log(sep);
//      console.log("| " + words[i] + " ".repeat(sep) + "|");
//
//   }
//   console.log("-".repeat(width));
// }
//
// niceRegularBox(["Grim", "visaged", "War", "hath", "smooth'd", "his", "wrinkled", "front"]);


// /*
// var totalCost = 0;
// var cart = [];
// function shoppingCart() {
//   var items = prompt("How many items do you have?");
//   items = floor(items);
//   for (var i = 0; i < items; i++) {
//     cart.push(prompt("How much does item" + (i+1) + " cost?"));
//   }
//
//   checkout(cart);
// }
//
//
// function checkout(item1, item2, coupon) {
//
//   var tax = 0.095;
//
//   var subtotal = item1 + item2;
//   var couponAmount = subtotal * coupon;
//   var total = subtotal - couponAmount;
//   total *= 1 + tax;
//
//   alert("Total: " + total.toFixed(2));
//
// }
//
//
// //checkout(50, 35, 0.25);
//
// function checkout(cart) {
//   var subtotal = 0;
//
//
//   for (var i = 0; i < cart.length; i ++) {
//     subtotal += parseFloat(cart[i]);
//   }
//
//   alert("Your subtotal is $" + subtotal);
//
//
// }
//
// shoppingCart();
//
//
// */
//
// /*
//
// function capitalize(str) {
//   var firstChar = str.substring(0,1);
//   var restChar = str.substring(1);
//   firstChar = firstChar.toUpperCase();
//   restChar = restChar.toLowerCase();
//   return firstChar + restChar;
//
// }
//
//
// function lastCapital(str) {
//   var lastChar = str.substring(str.length-1);
//   var restChar = str.substring(0, str.length-1);
//   lastChar = lastChar.toUpperCase();
//   restChar = restChar.toLowerCase();
//   return restChar + lastChar;
// }
//
// //console.log( capitalize(prompt("Give me a word.")) );
// //console.log( lastCapital(prompt("How about another one?")) );
//
//
// function challenge(str) {
//   var letters = [];
//   var isSpace = false;
//   var output = "";
//   for (var i = 0; i < str.length; i++) {
//     letters.push(str.charAt(i));
//   }
//   letters[0] = letters[0].toUpperCase();
//   for (var j = 0; j < letters.length; j++) {
//     if (isSpace) {
//       letters[j] = letters[j].toUpperCase();
//       isSpace = false;
//     }
//     if (letters[j] === " ") {
//       isSpace = true;
//     }
//   }
//   for (var k = 0; k < letters.length; k++) {
//     output += letters[k];
//   }
//   return output;
// }
// */
//
// /*
// function challenge(str) {
//   var spaceIndex = [];
//   var words = [];
//
//   for (var i = 0; i < str.length; i ++) {
//     if (str.charAt(i) == " ") {
//       spaceIndex.push(i);
//     }
//   }
//   words.push(str.substring(0, spaceIndex[0]);
//
//   for (var j = 1; j < spaceIndex.length -1; j++) {
//     words.push(str.substring(spaceIndex[j], spaceIndex[j+1]));
//   }
//
//   words.push(str.substring(spaceIndex[spaceIndex.length-1]));
//
//   for(var k = 0; k < words.length; k++) {
//     words[k] = capitalize(words[k]);
//   }
//   return words;
// }
//
// console.log(challenge(prompt("Give me a sentence.")));
// */
//
//
// /*
// // create a function that returns the rating of the score that is inputted
// function scoreRating(value){
//   if (value <= 150) {
//     return "Bad.";
//   }
//   else if (value >= 150 && value < 250) {
//     return "Decent.";
//   }
//   else if (value >= 250 && value < 350) {
//     return "Great!";
//   }
//   else {
//     return "You're cheating.";
//   }
// }
//
// alert(scoreRating(prompt("What score did you get?")));
// */
//
//
// /*
// var countries = ["Chad", "Cuba", "Iceland", "Iraq", "Mali", "Oman"];
// countries.push("Fiji");
// countries.splice(4, 0, "Iran");
// countries.splice(2, 1, "Togo");
// countries.push("Laos");
// countries.push("Peru");
// countries.sort();
//
// console.log(countries);
// */
//
//
// var animals = ["cat", "dog", "koala", "tiger", "duck", "chicken", "zebra", "lion", "bear", "monkey", "panda", "pig"]
//
// function sumA(zoo, letter) {
//   var count = 0;
//
//   for (var i = 0; i < zoo.length; i++) {
//     for (var j = 0; j < zoo[i].length; j++){
//       if (zoo[i].charAt(j).toLowerCase() === letter.toLowerCase()) {
//         count++;
//       }
//     }
//   }
//   return count;
// }
//
// console.log(sumA(animals, "a"));
//
// var person = {
//   age: 21,
//   height: "135cm",
//   name: "Object"
//
//
// };
//
// console.log(person.age);
