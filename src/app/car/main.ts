import { CarComponent } from './car.component';
import { Engine } from './engine';
import { Wheels } from './wheels';

function main() {
    let engine = new Engine();
    let wheels = new Wheels();
    let car = new CarComponent(engine, wheels);

    car.startEngine()

}

main();
