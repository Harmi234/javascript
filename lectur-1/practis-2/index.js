// Define the Car class
class Car {
    // Constructor method to initialize properties
    constructor(make, model, year) {
      this.make = make;  // Brand of the car
      this.model = model; // Model of the car
      this.year = year;   // Manufacturing year
    }
  
    // Method to start the car
    start() {
      console.log(`${this.make} ${this.model} is starting...`);
    }
  
    // Method to stop the car
    stop() {
      console.log(`${this.make} ${this.model} is stopping...`);
    }
  
    // Method to display car details
    displayDetails() {
      console.log(`Car: ${this.make} ${this.model} (${this.year})`);
    }
  }
   // Create an instance of the Car class
   let myCar = new Car('Toyota', 'Corolla', 2021);

  // Define the ElectricCar class, extending the Car class
class ElectricCar extends Car {
    constructor(make, model, year, batteryLife) {
      // Call the parent class constructor
      super(make, model, year);
      this.batteryLife = batteryLife; // Additional property for electric cars
    }
  
    // Method to display battery status
    displayBatteryStatus() {
      console.log(`${this.make} ${this.model} has ${this.batteryLife}% battery left.`);
    }
  }
  
  // Create an instance of ElectricCar
  let myElectricCar = new ElectricCar('Tesla', 'Model S', 2022, 85);
  
  // Use methods from both Car and ElectricCar classes
  myElectricCar.displayDetails();         // Output: Car: Tesla Model S (2022)
  myElectricCar.start();                  // Output: Tesla Model S is starting...
  myElectricCar.displayBatteryStatus();   // Output: Tesla Model S has 85% battery left.
  myElectricCar.stop();                   // Output: Tesla Model S is stopping...
  
  
 
  
  // Use the methods of the Car class
  myCar.displayDetails();  // Output: Car: Toyota Corolla (2021)
  myCar.start();           // Output: Toyota Corolla is starting...
  myCar.stop();            // Output: Toyota Corolla is stopping...
  