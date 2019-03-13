function getOperand(operandName){
    let result = null;
    do{
        let operand = prompt ('Enter ' + operandName + ' number');
        if(parseFloat(Number(operand))){
            result = operand;
        } else {
            alert ('Please, enter correct value');
        };
    } while (result == null);       
    return result;
};

function getAction(){
    let result = null;
    do{
        let operand = prompt ('Enter action available options: +, -, /, *');
        if ('+-/*'.includes(operand)){
            result = operand;
        } else {
            alert ('Please, enter correct action');
        };
    } while (result == null);   
    return result;
};

function calculate(operandA, operandB, action){
    if((operandA == null) || (operandB == null) || (action == null)){
        alert ('Incorrect value or action');
    };
    switch(action){
        case '+':
        return +operandA + +operandB;
    case '-':
        return +operandA - +operandB;
    case '*':
        return +operandA * +operandB;
    case '/':
        if (+operandB == 0){
            alert ('Value can`t be 0');
        } else{
            return +operandA / +operandB;
        };
    };
};

const operandA = getOperand('first');
const operandB = getOperand ('second');
const action = getAction ();
const result = calculate(operandA, operandB, action);

alert ('Result: ' + result);

