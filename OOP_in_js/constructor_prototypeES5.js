
// js engine defines a Person function and an anonymos prototype.
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

// Define a method inthe prototype object of Person.
Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
  };

  // create instances/objects of Person type.
  let p1 = new Person("John", "Doe");
  let p2 = new Person("Jane", "Doe");
  
  console.log(p1.getFullName());
  console.log(p2.getFullName());

  //ES5 syntax