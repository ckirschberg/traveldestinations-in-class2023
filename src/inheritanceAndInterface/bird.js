"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bird = void 0;
var animal_1 = require("./animal");
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, wingSpan) {
        var _this = _super.call(this, name) || this;
        _this.wingSpan = wingSpan;
        return _this;
    }
    Bird.prototype.fly = function (distance) {
        console.log("The bird flew " + distance + " meters");
    };
    return Bird;
}(animal_1.Animal));
exports.Bird = Bird;
