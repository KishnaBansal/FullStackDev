//Object creation using object literal
let person = {
    firstName: "Peace",
    lastName: "Cool",
    age: 38,
    occupation: "Developer"
};

console.log("Initial object:",person);

//Accessing object properties (Dot notation and )
console.log("First name:",person.firstName);
console.log("Last name:",person["lastName"]);

//Modifying Object Properties
person.age = 19;
person["occupation"] = "Manager";
console.log("After modification: ", person);

//Adding new properties
person.gender = "Male";
person["country"] = "India";
console.log("After Adding New Properties: ", person);

//Deleting properties
delete person.occupation;
console.log("After deleting  Properties: ", person);

//Nested objects
person.address = {
    street: "Emerald enclave",
    zip: 570027
}
console.log("After adding Nested objects: ", person);
//Acessing nested objects
console.log("Street: ", person.address.street);
console.log("Zip: ", person["address"]["zip"]);

//Using object methods
person.greet = function() {
    return "Hello, " + this.firstName + " " + this.lastName;
};
console.log(person.greet());

//Checking property existence 
console.log("Has 'age' property: ", 'age' in person);
console.log("Has 'occupation' property: ", 'occupation' in person);