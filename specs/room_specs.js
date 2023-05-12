const assert = require('assert')
const Paint = require('../models/paint.js')
const Decorator = require('../models/decorator.js')
const Room = require('../models/room.js')



describe('Room', function () {
let room;


beforeEach(function() {
room = new Room(10);
});

it('should have an area in square meters', function() {
    const actual = room.area;
    assert.strictEqual(actual, 10);
})

it('should start not painted', function() {
    const actual = room.painted;
    assert.strictEqual(actual, false)
})


it('should be able to be painted', function() {
    const actual = room.roomPainted();
    const expected = true
    assert.strictEqual(actual, expected)
})

})

