import { Animal } from "./animal";

export class Cat extends Animal {
    favoriteFood: string;

    constructor(name: string, favoriteFood: string) {
        super(name);
        this.favoriteFood = favoriteFood;
    }
}