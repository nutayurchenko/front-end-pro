function getName(){
    let someName = null;
    do{
        let userValue = prompt ('Введите ваше имя:');
        if(isNaN(userValue) && userValue != ''){
            someName = 'Привет ' + userValue + '!';
        } else {
            alert ('Что-то пошло не так. Введите корректно ваше имя');
        };
    } while (someName == null);       
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

function addElements(){
    let list = document.getElementById("user_number");
    let newLi = document.createElement('li');
    list.appendChild(newLi);
    return newLi;
}

function numberOfRows(){
    for(countLi = 1;  countLi <= userNumber; countLi++){
      var lastLi = addElements();
    }
    lastLi.innerText = userNumber;
}

const userName = getName();
const userNumber = getNumber();
const userLi = numberOfRows();
document.getElementById("user_text").innerHTML = userName;
