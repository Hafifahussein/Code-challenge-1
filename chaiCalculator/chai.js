// function calculateChaiIngredients(numberOfCups) {
//   const waterPerCup = 200;  // ml
//   const milkPerCup = 50;    // ml
//   const teaPerCup = 1;      // tablespoon
//   const sugarPerCup = 2;    // teaspoons

//   const totalWater = numberOfCups * waterPerCup;
//   const totalMilk = numberOfCups * milkPerCup;
//   const totalTea = numberOfCups * teaPerCup;
//   const totalSugar = numberOfCups * sugarPerCup;

//   console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
//   console.log(`Water: ${totalWater} ml`);
//   console.log(`Milk: ${totalMilk} ml`);
//   console.log(`Tea Leaves (Majani): ${totalTea} tablespoons`);
//   console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
//   console.log("\nEnjoy your Chai Bora!");
// }

// const cupsInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
// calculateChaiIngredients(Number(cupsInput));



function calculateChaiIngredients(numberOfCups) {
  const water = 200 * numberOfCups;
  const milk = 50 * numberOfCups;
  const teaLeaves = numberOfCups;
  const sugar = 2 * numberOfCups;

  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${water} ml`);
  console.log(`Milk: ${milk} ml`);
  console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${sugar} teaspoons`);
  console.log("\nEnjoy your Chai Bora!");
}

const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(input);
calculateChaiIngredients(numberOfCups);

