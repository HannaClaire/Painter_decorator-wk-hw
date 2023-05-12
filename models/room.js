const Room = function(area) {
    this.area = area
    this.painted = false
}


Room.prototype.roomPainted = function() {
    if(this.painted === false)
    return true 
}




// Room.prototype.roomPainted = function() {
//     if(this.painted === false)
//     return true 
// }




module.exports = Room