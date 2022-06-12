

let currentResult = 0;

let logEntries = [];

function getUserNumberInput()
{
    return parseInt(userInput.value);
}

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

function add()
{
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    result = createAndWriteOutput('+',enteredNumber);
    writeToLog('+',initialResult,enteredNumber, result);
    console.log(logEntries);
    
    
}

function substract()
{
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    result = createAndWriteOutput('-',enteredNumber);
    writeToLog('-',initialResult,enteredNumber, result);
    console.log(logEntries);
}


function multiply()
{
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    result = createAndWriteOutput('*',enteredNumber);
    writeToLog('*',initialResult,enteredNumber, result);
    console.log(logEntries);
}


function divide()
{
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    result = createAndWriteOutput('/',enteredNumber);
    writeToLog('/',initialResult,enteredNumber, result);
    console.log(logEntries);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',substract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);


