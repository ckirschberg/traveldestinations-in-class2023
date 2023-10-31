import { Bird } from "./bird";
import { Cat } from "./cat";

const cat1 = new Cat("Chalie", "Whatever we are eating");
cat1.move(10);

const bird1 = new Bird("Poppy", 8);
bird1.fly(80);

cat1.eat(29);
bird1.eat(893);