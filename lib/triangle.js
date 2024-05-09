const Shape = require('./shape.js');

class Triangle extends Shape {
    constructor(color) {
        super(color)
        this.fontSize = 52;
        this.textY = 145;
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

module.exports = Triangle;