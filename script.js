//complete this code
// Define the Animal class
class Animal {
    constructor(species) {
        this._species = species;
    }

    // Getter for species
    get species() {
        return this._species;
    }

    // Method to make a sound
    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}

// Define the Cat class that extends Animal
class Cat extends Animal {
    // Method specific to Cat
    purr() {
        console.log("purr");
    }
}

// Define the Dog class that extends Animal
class Dog extends Animal {
    // Method specific to Dog
    bark() {
        console.log("woof");
    }
}

// Example usage:
const myCat = new Cat(this._species);
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr();      // Output: purr

const myDog = new Dog(this._species);
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark();      // Output: woof

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
