class Generator {

    constructor() {
        this.temp = 'hello'
        console.log('generator initialized');
    }

    getRandomNum() {
        return Math.floor(Math.random() * 10) + 1;
    }
}

export default Generator;