function getNumber(){
    let result = null;
    do{
        let number = prompt ('Введите ' + 'число:');
        if(!isNaN(parseFloat(number)) && isFinite(number)){
            result = number;
        } else {
            alert ('Пожалуйста, введите корректное число');
        };
    } while (result == null);       
    return result;
};

function countEvenNumbers(n) {
        let count = 0;
        n.toString().split('').map(function(n){
            n%2 == 0 ? count++: false
        });
        return count;
    }
    

const userNumber = getNumber();
const evenNumbers = countEvenNumbers(userNumber);

alert ('Ваше число содержит ' + evenNumbers + ' чётных цифр(ы).')

