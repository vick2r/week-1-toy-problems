// Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below:
//         A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40
function gradeGenerator (studentMarks) 
// Declaring the function gradeGenerator which takes a number as input and runs the block below
{
    parseInt(studentMarks);
//Converting the value of studentMarks to a number
    if (studentMarks <= 100  && studentMarks > 79) {
        return "You have a mean grade of A"
    } else if (studentMarks < 79 && studentMarks >= 60) {
        return "You have a mean grade of B"
    } else if (studentMarks < 60 && studentMarks >= 49) {
        return "You have a mean grade of C"
    } else if (studentMarks < 49 && studentMarks >= 40) {
        return "You have a mean grade of D"
    } else if (studentMarks < 40){
        return "You have a mean grade of E"
    }
// Used if...else statements to evaluate the conditions of the ranges the inputted marks fall within, returning the mean grade within that range
}
console.log (gradeGenerator(77))
//Logging the result of calling the function with test marks to make sure the code is running well
//=> You have a mean grade of B