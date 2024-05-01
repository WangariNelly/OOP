// Parent class
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    // Method to make sound
    makeSound() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  // Subclass 1
  class Dog extends Animal {
    // Overriding the makeSound method
    makeSound() {
      console.log(`${this.name} barks.`);
    }
  }
  
  // Subclass 2
  class Cat extends Animal {
    // Overriding the makeSound method
    makeSound() {
      console.log(`${this.name} meows.`);
    }
  }
  
  // Creating instances of different classes
  const dog = new Dog("Buddy");
  const cat = new Cat("Whiskers");
  
  // Calling makeSound method on different objects
  dog.makeSound(); // Outputs: Buddy barks.
  cat.makeSound(); // Outputs: Whiskers meows.

  
 /**We have a parent class Animal with a method makeSound() that prints a generic sound message.
We create two subclasses Dog and Cat, both of which inherit from the Animal class.
Each subclass overrides the makeSound() method with its own implementation specific to the type of animal.
When we create instances of Dog and Cat and call the makeSound() method on them, each object executes the appropriate overridden method based on its type. This is polymorphism in action, where the same method name (makeSound()) behaves differently depending on the type of object it's called on. */  