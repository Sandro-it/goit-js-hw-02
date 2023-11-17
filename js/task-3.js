"use strict";
function checkForSpam(message) {
  // Переводимо рядок в нижній регістр для порівняння
  let lowerCaseMessage = message.toLowerCase();

  // Перевіряємо наявність заборонених слів
  if (lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale")) {
    return true; // Знайдено заборонене слово
  } else {
    return false; // Заборонених слів не знайдено
  }
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book is on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
