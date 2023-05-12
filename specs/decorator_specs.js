const assert = require('assert')
const Paint = require('../models/paint.js')
const Decorator = require('../models/decorator.js')
const Room = require('../models/room.js')

describe('Decorator', function(){
    let decorator


beforeEach(function() {
decorator = new Decorator();
})


it('should start with an empty paint stock', function() {
    const actual = decorator.paintStock;
    assert.deepStrictEqual(actual, [])
})

xit('should be able to add a can of paint to paint stock')
xit('should ne able to calculate total litres of paint it has in stock')
xit('should be abke to calculate whether it has enough paint to paint a room')
xit('should be able to paint room if has enough paint')
})
