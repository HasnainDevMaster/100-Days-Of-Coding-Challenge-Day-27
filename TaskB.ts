// 100 Days Of Coding Challenge!

/** Question 80: Updating Object Properties:
Add a property named `color` to the existing car object, and then update the `year` property to `2021`.
Show how to perform these operations.*/

//-----------------------------------------------------------------------------------------------------

// Interface for the object 'Car', including the color property
interface Car {
  make: string;
  model: string;
  year: number;
  color?: string; // Adding the color property as optional
}

// Oject 'myCar' representing a car
const myCar: Car = {
  // Object name changed from 'car' to 'myCar'
  make: "Honda",
  model: "Insight HEV",
  year: 2020,
};

// Add a property named 'color' to the existing car object
myCar.color = "Red";

// Update the 'year' property to 2021
myCar.year = 2021;

console.log("myCar:", myCar); // Output: { make: 'Toyota', model: 'Corolla', year: 2021, color: 'Red' }
