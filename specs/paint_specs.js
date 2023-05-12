const assert = require('assert')
const Paint = require('../models/paint.js')
const Decorator = require('../models/decorator.js')
const Room = require('../models/room.js')


describe('Paint', function () {
    let paint


beforeEach(function () {
    paint = new Paint(10)

})

it('should have a number of litres of paint', function() {
    const actual = paint.litres;
    assert.deepStrictEqual(actual, 10)
})

//did most of this one myself yay
it('should be able to check if it is empty', function(){
    const paintCan = new Paint(paint.litres)
    const actual = paintCan.paintCanEmpty()
    const expected = false
    assert.strictEqual(actual, expected)
})


it('should be able to empty itself of paint', function () {
    // const initialPaintCanAmount = 10;
    const paintCan = new Paint(paint.litres);
    paintCan.empty();
    const actual = paintCan.newPaintAmount();
    const expected = 0;
    assert.strictEqual(actual, expected);
})





})