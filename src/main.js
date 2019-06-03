import Generator from './generator';

class Main {
    constructor() {
        console.log('instantiated main class');
        this.generator = new Generator();
        let generator = this.generator;
        let randomNum = this.generator.getRandomNum();
        console.log(randomNum);
        console.log(this.generator.temp)
        console.log(generator.temp);
    }
}

new Main();