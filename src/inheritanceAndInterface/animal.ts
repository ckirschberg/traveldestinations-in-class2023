import { AnimalInterface } from "./animalInterface";

export class Animal implements AnimalInterface {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distance: number) {
        console.log("The animal just moved " + distance + " meters");
    }

    eat(nutritionalValue: number) : void {
        console.log("Animal just ate " + nutritionalValue + " something with this nutritionalValue");
    }
}