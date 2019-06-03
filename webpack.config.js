const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'app.min.js',
        path: path.resolve(__dirname, 'dist')
    }
};