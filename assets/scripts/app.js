

let currentResult = 0;

let logEntries = [];

function getUserNumberInput()
{
    return parseInt(userInput.value);
}

// fucntion to p
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
    else
    {
        currentResult /=  enteredNumber;
    }
    outputResult(currentResult,calcdescription); // fun definition is in vendor.js file
    return currentResult;

}

function calculateResult(calculationType)
{
    const enteredNumber = getUserNumberInput();
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
    else
    {
        mathOperator = '/';
    }

    result = createAndWriteOutput(mathOperator,enteredNumber);
    writeToLog(mathOperator,initialResult,enteredNumber, result);
    console.log(logEntries);

}

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

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',substract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);


