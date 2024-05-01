class Car {
    constructor(make, model) {
      this.make = make; // Public attribute
      let _model = model; // Private attribute
  
      // Getter method
      this.getModel = function() {
        return _model;
      };
  
      // Setter method
      this.setModel = function(newModel) {
        _model = newModel;
      };
    }
  }
  
  // Creating a car object
  let myCar = new Car("Toyota", "Camry");
  
  // Accessing the public attribute
  console.log("Make:", myCar.make);
  
  // Trying to access the private attribute directly (this will return undefined)
  console.log("Model:", myCar._model);
  
  // Accessing the private attribute using a getter method
  console.log("Model:", myCar.getModel());
  
  // Modifying the private attribute using a setter method
  myCar.setModel("Corolla");
  console.log("Updated Model:", myCar.getModel());
  
  /**make is a public attribute, which can be accessed and modified directly using dot notation.
_model is a private attribute, denoted by the use of a closure to encapsulate it within the constructor. It cannot be accessed or modified directly from outside the class.
Getter and setter methods (getModel() and setModel()) are defined inside the constructor to provide controlled access to the private _model attribute.*/