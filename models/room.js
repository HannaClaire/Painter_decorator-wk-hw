const Room = function(area) {
    this.area = area
    this.painted = false
}


Room.prototype.canBePainted = function(paint) {
return (this.area >= this.litres)

}



//this one below worked but i dont think for the right reasons!

// Room.prototype.roomPainted = function() {
//     if(this.painted === false)
//     return true 
// }




module.exports = Room