class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    // set employee name method
    setName(name) {
        this.name = name;
    }

    // set Employee name method
    getName() {
        return this.name;
    }

    // Method to set employee position
    setPosition(position) {
        this.position = position;
    }

    // Method to get employee position
    getPosition() {
        return this.position;
    }
}

module.exports = Employee;
