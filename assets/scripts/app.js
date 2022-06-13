

let currentResult = 0;

let logEntries = [];


// function to get user input
function getUserNumberInput()
{
    return parseInt(userInput.value);
}

// fucntion to update logentries
function writeToLog(operator, previousNumber, enteredNumber , result)
{
    logEntry = {
        operator,
        previousNumber,
        enteredNumber,
        result
    };

    logEntries.push(logEntry);
}


// writes output to webpage
function createAndWriteOutput(operator, enteredNumber)
{
    const calcdescription = `${currentResult} ${operator} ${enteredNumber}`;
    if(operator == '+')
    {
        currentResult += enteredNumber;
    }
    else if(operator == '-')
    { 
        currentResult -=  enteredNumber;
    }
    else if(operator == '*')
    {
        currentResult *=  enteredNumber;
    }
    else if(operator == '/')
    {
        currentResult /=  enteredNumber;
    }
    else
    {
        currentResult = currentResult ** enteredNumber;
    }
    outputResult(currentResult,calcdescription); // fun definition is in vendor.js file
    return currentResult;

}


// utility function for calling other function and showing result
function calculateResult(calculationType)
{
    const enteredNumber = getUserNumberInput();
    if (
        calculationType !== "+" &&
        calculationType !== "-" &&
        calculationType !== "*" &&
        calculationType !== "/" &&
        calculationType !== "**" || 
        !enteredNumber
      ){
          return;
      }

    
    const initialResult = currentResult;
    if(calculationType === '+')
    {
        mathOperator = '+';
        
    }
    else if(calculationType === '-')
    {
        mathOperator = '-';
    }
    else if(calculationType === '*')
    {
        mathOperator = '*';
    }
    else if(calculationType === '/')
    {
        mathOperator = '/';
    }
    else
    {
        mathOperator = '**';
    }
    result = createAndWriteOutput(mathOperator, enteredNumber);
    writeToLog(mathOperator,initialResult,enteredNumber, result);
    console.log(logEntries);

}


//event handler
function add()
{
    calculateResult('+');
}

function substract()
{ 
    calculateResult('-');
}


function multiply()
{
    calculateResult('*');
}


function divide()
{
    calculateResult('/');
}

function expo()
{
    calculateResult('**');
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',substract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);
expobtn.addEventListener('click',expo);


