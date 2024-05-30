/*TODO: Create a menu app as seen in this week's video. 
what you create is up to you as long as it meets the following:
----Use at least one array 
----Use at least two classes
----Your menu should have the options to create, view, and 
    delete elements */

//Menu Cars 

//class Car
    //make
    //model

class Car {
    constructor(make, model){
        this.make = make; //says hey when I am talking about a car I am talking about THIS specific make/model
        this.model = model;  
    }
}
    //make
    //model

//class Menu with list of cars 
class Menu {
    constructor(){
        this.cars=[] //cars array -- empty atm 
    }
   
    //add cars method to Menu class-- we need the app to prompt the user to add a car with a make and model 
        //prompt for a make 
        //prompt for a model 
        //create new car -> push the car the user adds into the this.cars[]

    addCar(){ //function addCar with prompting make/model and method to push new car to array 
        let carMake = prompt('Enter car make'); //ask for make - store in variable
        let carModel = prompt('Enter car model'); //ask for model - store in variable
        //taking carMake and carModel add it to a new Car then push it to this.cars array 
        this.cars.push(new Car(carMake, carModel));
    }


    //delete cars method to Menu Class
    deleteCar(){
        let carIndex = prompt('Enter car index to DELETE:')
        this.cars.splice(carIndex, 1);
    }




    //view cars method for Menu Class
    viewCars(){
        let displayCars = " ";
        //for loop to iterate through all the cars we have in this.cars array 
        for(let i = 0; i < this.cars.length; i++){
            //add the cars with their make and model onto the string displayCars
            displayCars += `
            ${i}) ${this.cars[i].make} ${this.cars[i].model} `
        }
        //since this is a menu we don't want to console.log() we want to alert
        alert (`
        Car Inventory:
        --------------
        ${displayCars}
        `); 
    }
 
 
    //see a menu method for Menu Class -- visual of the menu 
 showMainMenu(){
    return prompt`
    Main Menu:
    ----------
    0) Exit Menu 
    1) Add Car
    2) Delete Car 
    3) View Car 
    `
}
    //start the menu 
    start(){
        let selection = this.showMainMenu();
        while (selection != 0){ //as long as the selection is NOT equal to zero we will do the switch/case
            switch(selection){
                case "1": this.addCar();
                break;

                case"2": this.deleteCar();
                break;

                case"3": this.viewCars();
                break;

                default: selection = 0; //if the selection is anything but 1-3, selection will = 0 then exit
            }
            selection = this.showMainMenu(); //re-prompts the main menu
        }
        alert("Exiting Menu...goodbye!");
        //the while says if selection !=0 --run this code...if they choose zero or another number it wil exit out of the while loop and alert goodbye 
    }


}

//instaniate the menu and invoke the start method 
let menu = new Menu ();
menu.start();







//TEST: making a new car then logging it 
    //  let car1 = new Car ('Honda', 'Civic')
    //  console.log(car1) //prints Object { make: "Honda", model: "Civic" }


//TEST: the addCar method with a pusedo menu 
    //  let menu = new Menu ();
    //  menu.addCar();

//TEST: addCar and viewCar
    //  let menu = new Menu ();
    //  menu.addCar();
    //  menu.viewCars();

//TEST: adding two cars, viewing them, then deleting one
//they will appear in the order WE put them in
    //  let menu = new Menu ();
    //  menu.addCar();
    //  menu.addCar();
    //  menu.viewCars();
    //  menu.deleteCar();
    //  menu.viewCars();

//TEST: call showMainMenu
    //let menu = new Menu();
    //menu.showMainMenu();