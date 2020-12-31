const assert = require('assert');
const Rectangle = require ('../Rectangle.js');

describe ('Rectangle', () => {
//new Rectangle(a, b);
    it(' instance of a user-defined object type with two parameters', () =>{
        assert.strictEqual(typeof new Rectangle, "object");
        assert.strictEqual(Rectangle.length, 2);
    });
     it('should return true when both sides are equals', () => {
        assert.strictEqual(new Rectangle( 15 , 15).isSquare(), true);
     });
     it('should return false when size length are different', () => {
        assert.strictEqual(new Rectangle (82, 19).isSquare(), false);
    });
    it('should return area of 276', () => {
        assert.strictEqual(new Rectangle (12, 23).getArea(), 276);
    });
    it('should return a perimeter of 40', () => {
        assert.strictEqual(new Rectangle (13, 7).getPerimeter(), 40);
    });
})
