//Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 
function netSalCalc (basicSal, benefits) 
{
    //Declaring the variable which will hold the sum of both the parameters of the function
    const grossSal = basicSal + benefits;

    //Declaring the object which contains the percentages of the paye charged on salaries falling within the provided ranges
    const payeBrackets = {
        24000: 0.1,
        32333: 0.25,
        500000: 0.3,
        800000: 0.325,
        800001: 0.35,
    };
    //Declaring the object which contains the subractions to be done on the paye
    const subtractFromPaye= {
        personalRelief: 2400,
        insuranceRelief: 5000,
    };
    //Declaring the object which contains the nhif rates (values) per pay bracket (keys)
    const nhifRates = {
       6000: 150,
       8000: 300,
       12000: 400,
       15000: 500,
       20000: 600,
       25000: 750,
       30000: 850,
       35000: 900,
       40000: 950,
       45000: 1000,
       50000: 1100,
       60000: 1200,
       70000: 1300,
       80000: 1400,
       90000: 1500,
       100000: 1600,
       100001: 1700,
    };
    //A function which loops through the object with conditional statements until it find the pay bracket corresponding to the gross salary
    function findNhifRate(grossSal) {
        for (let i=0; i < nhifRates.length; i++) {
        if (grossSal <= object [0]) { 
            return 150
            } else if (grossSal >= object [1] && grossSal < object [2]) { 
            return 300
            } else if (grossSal >= object [2] && grossSal < object [3]) {
            return 400
            } else if (grossSal >= object[3]) {
            return 500
            }
        }
    }
}