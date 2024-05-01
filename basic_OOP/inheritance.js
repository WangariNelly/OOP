// Parent class (superclass)
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    // Method
    eat() {
      console.log(`${this.name} is eating.`);
    }
  }
  
  // Subclass (derived class)
  class Dog extends Animal {
    // Constructor
    constructor(name, breed) {
      // Call the superclass constructor
      super(name);
      this.breed = breed;
    }
  
    // Method
    bark() {
      console.log(`${this.name} is barking.`);
    }
  }
  
  // Creating instances
  const myDog = new Dog("Buddy", "Labrador");
  
  // Accessing superclass method
  myDog.eat(); // Output: Buddy is eating.
  
  // Accessing subclass method
  myDog.bark(); // Output: Buddy is barking.

  
  /** We have a superclass called Animal, which has a constructor to initialize the name attribute and a method eat() to simulate eating behavior.
We create a subclass called Dog, which extends Animal. It adds a new attribute breed and a new method bark() to represent the behavior specific to dogs.
Inside the Dog class, we use the super() method to call the constructor of the superclass and initialize the inherited attribute name.
The myDog object is an instance of the Dog class. It inherits the eat() method from the Animal class and has its own method bark().
*/