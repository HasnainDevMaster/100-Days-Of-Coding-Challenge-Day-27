"use strict";
// 100 Days Of Coding Challenge!
// Create an object representing a car
const myNewCar = {
    make: "Honda",
    model: "Insight HEV",
    year: 2021,
    color: "Red",
};
// Function to log all properties and values of an object
function logObjectProperties(obj) {
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
