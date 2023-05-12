const Paint = function(litres) {
    this.litres = litres
}


Paint.prototype.empty = function(litres) {
    this.litres = 0
}
Paint.prototype.newPaintAmount = function(litres) {
    return this.litres;
}

Paint.prototype.paintCanEmpty = function(){
    if (this.litres === 0){
    return true
    }
return false
}




module.exports = Paint


