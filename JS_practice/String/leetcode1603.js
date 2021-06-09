/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.small=small;
    this.medium=medium;
    this.big=big;
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {

    if(carType===3){
        if(this.small>0){this.small=this.small-1;return true;}
        else return false;
    }

    else if(carType===2){
        if(this.medium>0){this.medium=this.medium-1;return true;}
        else return false;
    }
    else if(carType===1){
        if(this.big>0){this.big=this.big-1;return true;}
        else return false;
    }
    else return false;

};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */