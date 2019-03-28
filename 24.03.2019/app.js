function changeColor(colorLi){
    colorLi.style.background = 
        colorLi.style.background === 'yellow' ?
            'red' : 'yellow';
}

function onInputFocus(event){
    changeColor(event.target);
}

function clickOnLi(el){
        if (el.altKey){
            el.target.remove();
        } else {
            onInputFocus(el); 
        }
}
    
function addNewLi(){
    let ul = document.getElementById('ulElement');
    let li = document.createElement('li');
    li.innerHTML = 'Li element';
    li.addEventListener('click', clickOnLi);
    ul.appendChild(li);
}

const button = document.getElementById('button');
button.onclick = addNewLi;
