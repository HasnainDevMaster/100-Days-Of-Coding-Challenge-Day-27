// 100 Days Of Coding Challenge!

/** Question 81: Iterating Over Object Properties:
Write a function that takes an object as an argument and logs all of its properties and values.*/

//-----------------------------------------------------------------------------------------------

// Interface for the object 'Car', including the color property
interface Car {
  make: string;
  model: string;
  year: number;
  color?: string; // Adding the color property as optional
}

// Oject 'myNewCar' representing a car
const myNewCar: Car = {
  // Object name changed from 'Car' to 'myNewCar'
  make: "Honda",
  model: "Insight HEV",
  year: 2021,
  color: "Red",
};

// Function to log all properties and values of an object
function logObjectProperties(obj: { [key: string]: any }): void {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

console.log("myNewCar: ");

// Call the function with the car object
logObjectProperties(myNewCar);
/* Output:
 make: Honda
 model: Insight HEV
 year: 2021
 color: Red*/
