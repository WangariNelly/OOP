//define the class Person
class Person {
    //initialize properties
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
    //method
	getFullName() {
		return this.firstName + " " + this.lastName;
	}
}
//create instances/objects
let p1 = new Person('John', 'Doe');
let p2 = new Person('Jane', 'Doe');

console.log(p1.getFullName());
console.log(p2.getFullName());