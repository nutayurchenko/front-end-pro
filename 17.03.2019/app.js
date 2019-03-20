const obj = {
    name: 'Anna', 
    age: 29, 
    adress: { 
        country: 'UA', 
        city: 'Dnipro',
        home:{
            street: 'Naberegnaja Pobedy',
        }
    }
};

function copy(obj){
    let newCopy = {};
        for (let prop in obj) { 
          if (obj.hasOwnProperty(prop)) { 
            if ('object' === typeof obj[prop]){ 
            newCopy[prop] = copy(obj[prop]); 
            } else{
                newCopy[prop] = obj[prop];
             }
          }
        }
    return newCopy;
};

const objCopy = copy(obj);

console.log(objCopy)
