//Empty array
let names = []
console.log(names)

//Non-empty array
let values = ["Peace","Cool","ABC",45,45.54]
console.log(values)

//Dynamic array
let dynArray = new Array("A",1,3,2,"vfdefw")
console.log(dynArray)

//print using for loop
for(var i=0;i<dynArray.length;i++) {
    console.log(dynArray[i])
}

//Inserting an element
values.push(76)
console.log(values)

//Accessing array elements
console.log(dynArray[0])
console.log(dynArray[3])
console.log(dynArray[40])

//removing an element
let pop = values.pop()
console.log(pop)

//Object
let person = {
    name: "Someone",
    age: 21,
};
console.log(person)
console.log(person.age)
console.log(person.name)

//undefined
let undefinedValue
console.log(undefinedValue)
console.log(typeof(person))
console.log(typeof(person.age))
console.log(typeof(person.name))