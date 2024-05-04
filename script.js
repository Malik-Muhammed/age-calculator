// Getting references to elements from the DOM

const calculateBtn = document.querySelector(".calculate-btn");
const errorMessage = document.querySelectorAll(".errorMessage");
const inputComponent = document.querySelectorAll(".inputComponent");
const dayInput = document.querySelector("#day");
const yearsHolder = document.querySelector(".yearsHolder");
const monthsHolder = document.querySelector(".monthsHolder");
const daysHolder = document.querySelector(".daysHolder");

// Defining constants for validation
const dateConstant = [31, 12, 1583];
const dateKeywords = ["day", "month", "past"];



// Getting the current date
let currentYear = new Date().getFullYear();
let currentMonth = (new Date().getMonth()) + 1;
let currentDay = new Date().getDate()

// Declaring variables to store user input
let userYear;
let userMonth;
let userDay;
let february;

//function to check if the year is a leap year or not
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) ||(year % 400 ===0)
}


//Array containing the number of days in each month
const daysInMonth = [31,february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


// Function to display error message user input invalid details
// The function has three parameters
function displayErrorMessage(inputIndex, message, isValid) {
    if (!isValid) {
        errorMessage[inputIndex].textContent = message;
        inputComponent[inputIndex].style.border = "1px solid var(--lightRed)";
    } else {
        errorMessage[inputIndex].textContent = "";
        inputComponent[inputIndex].style.border = "1px solid var(--lightGrey)";
    }
}




// Adding an event listener to the "calculate button".
calculateBtn.addEventListener("click", () => {
    
    console.log("button clicked")
   
    
    let isInputValid = true; //Flag to track if all inputs are valid

    //Loop through all the input fields and perform validation
    for (let i = 2; i >=0; i--) {

        if(i === 2){
            // validating year input

            if (Number(inputComponent[i].value) === 0) {
                //check if the year input field is empty
                displayErrorMessage(i, "This field is required", false);
                isInputValid = false;
            }
            
            else if (Number(inputComponent[i].value) < dateConstant[i]) {

                /*****check if the year is less than ${dateConstant[i]}, 
                which is 1583, and that is the year the Gregorian calendar started*****/

                displayErrorMessage(i, "Must be greater than 1582", false);
                isInputValid = false;
            }

            else if (Number(inputComponent[i].value) > currentYear) {

                /**check if the year in the input field is greater than the current year,
                for instance as at the time of developing this the current year is 2024***/

                displayErrorMessage(i, `Must be in the ${dateKeywords[i]}`, false);
                isInputValid = false;
            }

            else {
                    
                //if the above are all false, then run this block

                userYear = Number(inputComponent[i].value);
                displayErrorMessage(i, "", true);
                console.log(userYear)  
                february = isLeapYear(userYear) ? 29 : 28;
                daysInMonth[1] = february;
                
                    
            }

        
        }

        else if (i === 1) {

            // validating month input
            if ((inputComponent[i].value) === "") {
                // check if the input field for the month is empty
                displayErrorMessage(i, "This field is required", false);
                isInputValid = false;
            }
               
            else if ((Number(inputComponent[i].value) === 0)
                              ||
                    (Number(inputComponent[i].value) < 0)
                    )
            {//check if the input field for the month is zero or a negative value
                
                displayErrorMessage(i, `Must be a valid ${dateKeywords[i]}`, false);
                isInputValid = false;
            }



            else if (Number(inputComponent[i].value) > dateConstant[i]) {
                /***check if the input field for the month is greater 
                than the ${dateConstant[i-1]}, which is 12 ***/
                displayErrorMessage(i, `Must be a valid ${dateKeywords[i]}`, false);
                isInputValid = false;
            }

            else {
                //if the two above conditions are false, then run the else block
                userMonth = Number(inputComponent[i].value)
                displayErrorMessage(i, "", true);
                console.log(userMonth, userYear)
            }
        }

        else {

            // validating the day input

            if ((inputComponent[i].value) === "") {

                // check if the input field for the day is empty
                displayErrorMessage(i, "This field is required", false);
                isInputValid = false;

            }

            else if ((Number(inputComponent[i].value) === 0)
                             ||
                      (Number(inputComponent[i].value)<0)
                    )
            {//check if the input field for the day is zero or a negative value
                
                displayErrorMessage(i, `Must be a valid ${dateKeywords[i]}`, false);
                isInputValid = false;
                
            }

            else if ((Number(inputComponent[i].value))
                          >
                (daysInMonth[userMonth - 1])) {
                
                // Check if the entered day is valid for the entered month
                displayErrorMessage(i, `Must be a valid ${dateKeywords[i]}`, false);
                isInputValid = false;
            }
            
            else {
                 
                userDay = Number(inputComponent[0].value);
                displayErrorMessage(i, "", true);  
            }

            
        }

    
       
    }


    if (isInputValid) {
   
        /******  
             # If all the user inputs are valid (isInputValid is true)
             ## This block calculates the age based on the user's input date 
              (userYear, userMonth, userDay) and the current date 
              (currentYear, currentMonth, currentDay).
            ### It makes necessary adjustments to handle cases where 
                the user's birth month or day is after the current month or day.
            #### Finally, it updates the HTML elements and the current date variables 
                 with the calculated age and latest date, respectively.

        *****/
        console.log(currentDay, currentMonth, currentYear);
      
        console.log(userDay, userMonth, userYear);

        //Calculate the number of days in February based on the user's input year (leap year or not)
        february = isLeapYear(userYear) ? 29 : 28;
        
        console.log(february);
        
        console.log(daysInMonth);
        
        console.log(daysInMonth[userMonth - 1]);

        //Calculate the difference between the current year and the user's input year
        let yearDifference = currentYear - userYear;

        //Calculate the difference between the current month and the user's input month
        let monthDifference = currentMonth - userMonth;

        //Calculate the difference between the current day and the user's input day
        let dayDifference = currentDay - userDay;

      
        console.log(dayDifference, monthDifference, yearDifference);



       /**
         * Adjusts the monthDifference by subtracting 1 from yearDifference
         * and adding 12 to monthDifference if the user's birth month is
         * after the current month. This ensures that the age calculation
         * is accurate when the user's birth month has not been reached
         * in the current year.
         */
        function adjustAgeForBirthMonthAfterCurrentMonth() {
            if (monthDifference < 0) {
                yearDifference--;
                monthDifference += 12;
            }
        }

        adjustAgeForBirthMonthAfterCurrentMonth();

        /**
        * Handles the case where the user's birth day is after the current day.
        * 1. Subtracts 1 from monthDifference because the user has not yet reached
        *    their birth month in the current month.
        * 2. Calls adjustAgeForBirthMonthAfterCurrentMonth() to adjust yearDifference
        *    and monthDifference in case the user's birth month is after the current month.
        * 3. Adds the number of days in the user's birth month to dayDifference.
        *    This adjustment is necessary because when the user's birth day is after
        *    the current day, the dayDifference should be calculated from the end of
        *    the user's birth month to the current day.
        */
       if (dayDifference < 0) {
           monthDifference--;
           adjustAgeForBirthMonthAfterCurrentMonth();
           dayDifference += daysInMonth[userMonth - 1];
       }
        

        //Update the HTML elements with the calculated age (year, month, and day)
        yearsHolder.textContent = yearDifference;
        monthsHolder.textContent = monthDifference;
        daysHolder.textContent = dayDifference;

        //Update the current date variables with the latest date and time
        currentYear = new Date().getFullYear();
        currentMonth = (new Date().getMonth()) + 1;
        currentDay = new Date().getDate();
    }

    
})
