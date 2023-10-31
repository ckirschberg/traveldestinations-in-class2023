"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        console.log("The animal just moved " + distance + " meters");
    };
    Animal.prototype.eat = function (nutritionalValue) {
        console.log("Animal just ate " + nutritionalValue + " something with this nutritionalValue");
    };
    return Animal;
}());
exports.Animal = Animal;
