function getRandomNumb(min, max){
  return Math.floor((Math.random() * (max - min)) + min); //округлила число, для более легкого восприятия пользователем
}

function compareNumbers(firstRandomNumb, secondRandomNumb){
   
    if (firstRandomNumb>secondRandomNumb){
        return firstRandomNumb;
    } else{
        return secondRandomNumb;
    }
}
  
const firstRandomNumb = getRandomNumb(1000, 2000);
const secondRandomNumb = getRandomNumb(1000, 2000);
const result = compareNumbers(firstRandomNumb, secondRandomNumb);

alert ('Первое рандомное число: ' + firstRandomNumb);
alert ('Второе рандомное число: ' + secondRandomNumb);
alert ('Из двух рандомных чисел наибольшее ' + result);
