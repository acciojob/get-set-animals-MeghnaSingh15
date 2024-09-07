//complete this code
class Animal {
	constructor(species,sound){
		this._species = species;
		this._sound = sound;
}
get species(){
	return this._species;
}
makeSound(){
	console.log(this._sound);
}
}

class Dog extends Animal {
	constructor(species, sound){
		super(species, sound);
	}
	bark(){
		console.log("woof");
	}
	
}

class Cat extends Animal {
	constructor(species, sound){
		super(species, sound);
	}
	purr(){
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
