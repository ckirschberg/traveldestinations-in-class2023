import { Animal } from "./animal";

export class Bird extends Animal {
    wingSpan: number; // cm

    constructor(name: string, wingSpan: number) {
        super(name);
        this.wingSpan = wingSpan;
    }

    fly(distance: number) {
        console.log("The bird flew " + distance + " meters");
        
    }
}