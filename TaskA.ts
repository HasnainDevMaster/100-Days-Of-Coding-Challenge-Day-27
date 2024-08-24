// 100 Days Of Coding Challenge!

/** Question 79: Creating and Accessing Object Properties:
Construct an object representing a car with properties for make, model, and year.
Then, show how you can access the model property of the car.*/

//-------------------------------------------------------------------------------

// Interface for the object 'Car'
interface Car {
  make: string;
  model: string;
  year: number;
}

// Object 'Car' representing a car
const car: Car = {
  make: "Honda",
  model: "Insight HEV",
  year: 2020,
};

// Access the model property of the car
const carModel = car.model;
console.log(`The model of the car is: ${carModel}`); // Output: The model of the car is: Insight HEV
