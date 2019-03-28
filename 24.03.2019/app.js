function changeColor(colorLi){
    colorLi.style.background = 
        colorLi.style.background === 'yellow' ?
            'red' : 'yellow';
}

function onLiClick(event){
    changeColor(event.target);
}

function eventOnClick(el){
        if (el.altKey){
            el.target.remove();
        } else {
            onLiClick(el); 
        }
}
    
function addNewLi(){
    let ul = document.getElementById('ulElement');
    let li = document.createElement('li');
    li.innerHTML = 'Li element';
    li.addEventListener('click', eventOnClick);
    ul.appendChild(li);
}

const button = document.getElementById('button');
button.onclick = addNewLi;
