const assert = require('assert')
const Paint = require('../models/paint.js')
const Decorator = require('../models/decorator.js')
const Room = require('../models/room.js')

describe('Decorator', function(){
    let decorator
    let bluePaint
    let redPaint
    let orangePaint


beforeEach(function() {
decorator = new Decorator();
bluePaint = new Paint(10)
redPaint = new Paint(10)
orangePaint = new Paint(15)
})


it('should start with an empty paint stock', function() {
    const actual = decorator.paintStock;
    assert.deepStrictEqual(actual, [])
})

it('should be able to add a can of paint to paint stock', function () {
    decorator.add(bluePaint);
    const actual = decorator.paintStock;
    assert.deepStrictEqual(actual, [bluePaint]);

})

//just needed to add the litres to the beforeEach instances 
it('should ne able to calculate total litres of paint it has in stock', function(){
    decorator.add(bluePaint);
    decorator.add(redPaint);
    const actual = decorator.totalPaintAmount()
    const expected = bluePaint.litres + redPaint.litres;
    assert.deepStrictEqual(actual, expected)
})

it('should be able to calculate whether it has enough paint to paint a room', function() {
    const roomArea = 10
    decorator.add(orangePaint)
    const actual = decorator.enoughPaintForRoom(roomArea)
    assert.deepStrictEqual(actual, true)
})
it('should be able to paint room if has enough paint', function() {
// i didnt want to create a room instance in this spec as it seemed somewhat illogical that a decorator would always have an associated room with them.Wonder if this is the correct way of thinking in the context of this application?
    const roomArea = 10
    decorator.add(redPaint)
    paint = redPaint
    const actual = decorator.canPaintRoom(roomArea)
    assert.deepStrictEqual(actual, true )
}
)
})
