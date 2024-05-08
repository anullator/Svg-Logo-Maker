// Constructor Arithmetic is imported.
// const Shape = require('./shape.js');
const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');

// A testing suite for Shape is created.
// describe('Shape', () => {
  // Test that render function exists

describe('Circle', () => {
    describe('render', () => {
        // Circle
        it('should return a string for the circle SVG file with the given shape color', () => {
            const shape = new Circle();
            shape.color = "blue";
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="75" fill="blue" />')
        }); 
    });
});

describe('Triangle', () => {
    describe('render', () => {
        // Triangle
        it('should return a string for the triangle SVG file with the given shape color', () => {
            const shape = new Triangle();
            shape.color = "blue";
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
});
    
describe('Square', () => {
    describe('render', () => {
        // Square
        it('should return a string for the square SVG file with the given shape color', () => {
            const shape = new Square();
            shape.color = "blue";
            expect(shape.render()).toEqual('<rect x="50" y="25" width="150" height="150" fill="blue" />');
        })
    })
});