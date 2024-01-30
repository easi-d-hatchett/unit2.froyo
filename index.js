// Prompt the user for a list of comma-separated froyo flavors.

const userInput = prompt("Enter a list of comma-separated froyo flavors:");

//Split the user input into an array of flavors

const flavors = userInput.split(',');

//  Count the times each flavor is used.

const flavorCounts= {};
flavors.forEach(function(flavor){
    flavorCounts[flavor]= (flavorCounts[flavor]|| 0) + 1; 
});

// show results in console
console.log("Flavor Counts:" , flavorCounts);