const Employee = require('./employee');

// Create an instance of Employee
const employee1 = new Employee('Nelly Wangari', 'Software Engineer');

// Logs the employee info.
console.log('Employee Name:', employee1.getName());
console.log('Current Position:', employee1.getPosition());

// Update employee info
employee1.setName('John Doe');
employee1.setPosition('Senior Software Engineer');

// Get updated employee info
console.log('Updated Name:', employee1.getName());
console.log('Updated Position:', employee1.getPosition());
