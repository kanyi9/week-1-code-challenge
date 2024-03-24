

   function calculateSpeed(carSpeed) {//function name calculate speed
    if (carSpeed < 70) {//use if..else to show comparison
        return "OK";//return ok if speed is below 70
    } else {
        const points = pointsGot(carSpeed);
        if (points > 12) {
            return "License Suspended";//suspend the license if points are above 12
        } else {
            return points;
        }
    }
}

function pointsGot(carSpeed) {//function for calculating points gotten
    return Math.abs((carSpeed - 70) / 5);
}

console.log(calculateSpeed(57)); //to show output..in the bracket you put the speed