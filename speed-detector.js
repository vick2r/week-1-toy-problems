//Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

function speedDetector(speed) {
//Declares variables that will be used in the function execution
     const limit = 70;
    const demeritPoints = 1;
    const suspension = 12;
    
    //Initiates an if statement that evaluates the conditions relating to the value of speed inputted
    if (speed <= limit) {
        return `Ok.`
    } else {
        //Here, I declared a variable that computes the value of the points that varies with the speed inputted
        const howManyPoints = demeritPoints * Math.ceil(speed - 70) / 5;
        //I nested an if statement which then evaluates the conditions relating to the value of the points and returns the final outputs
        if (howManyPoints > suspension) {
        return `License suspended.`;
        } else {
            return `Points: ${howManyPoints}`;
        }
    }
}
console.log (speedDetector(140))
//Logging the result of calling the function with test marks to make sure the code is running well
//=> License suspended