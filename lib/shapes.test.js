// Constructors are imported.
const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');

// Circle
describe('Circle', () => {
    describe('render', () => {
        it('should return a string for the circle SVG file with the given shape color', () => {
            const shape = new Circle();
            shape.color = "blue";
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="75" fill="blue" />')
        }); 
    });
});

// Triangle
describe('Triangle', () => {
    describe('render', () => {
        it('should return a string for the triangle SVG file with the given shape color', () => {
            const shape = new Triangle();
            shape.color = "blue";
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
});

// Square
describe('Square', () => {
    describe('render', () => {
        it('should return a string for the square SVG file with the given shape color', () => {
            const shape = new Square();
            shape.color = "blue";
            expect(shape.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill="blue" />');
        })
    })
});