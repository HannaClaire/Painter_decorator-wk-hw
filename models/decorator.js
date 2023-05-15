const Decorator = function() {
    this.paintStock = []
}



Decorator.prototype.add = function (bluePaint) {
    this.paintStock.push(bluePaint);
}

Decorator.prototype.totalPaintAmount = function () {
    let total = 0;
for (const paint of this.paintStock) {
    total += paint.litres;
}
return total;
}


Decorator.prototype.enoughPaintForRoom = function(area)  {
    let totalLitres = 0
    for (const paint of this.paintStock) {
        totalLitres += paint.litres;
    }
    return totalLitres >= area
}


Decorator.prototype.canPaintRoom = function(roomArea) {
    if (this.totalPaintAmount() >= roomArea) {
        return true
    }
    return false
}
module.exports = Decorator