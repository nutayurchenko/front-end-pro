function getName(){
    let someName = document.getElementById("user_text");
    do{
        let userValue = prompt ('Введите ваше имя');
        if(isNaN(userValue) && userValue != ''){
            someName = 'Привет ' + userValue;
        } else {
            alert ('Что-то пошло не так. Введите корректно ваше имя');
        };
    } while (someName == document.getElementById("user_text"));       
    return someName;
};

function getNumber(){
    let result = null;
    do{
        let number = prompt ('Введите число от 0 до 100:');
        if(!isNaN(number) && isFinite(number) && (number>=0) && (number<=100)){
            result = number;
        } else {
            alert ('Пожалуйста, введите число от 0 до 100');
        };
    } while (result == null);       
    return result;
};


const userName = getName();
const userNumber = getNumber();
document.getElementById("user_text").innerHTML = userName;
document.getElementById("user_number").innerHTML = 'Ваше число ' + userNumber;
