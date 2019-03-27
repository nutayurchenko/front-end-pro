function changeColor(elem){
    let elemClass = elem.className;
    
    let e = window.event;
    if (e.altKey) {
        document.getElementById("ulElement").removeChild(elem);
    }
    else{
        switch (elemClass) {
          case '':
            elem.className = 'red';
            break;
          case 'red':
            elem.className = 'yellow';
            break;
          case 'yellow':
            elem.className = 'red';
            break;
          default:
            elem.className = '';
        }
    }			
}

function addLiElement(){
    let ul = document.getElementById("ulElement");
    let li = document.createElement("li");
    li.onclick = function () { changeColor(this); };
    ul.appendChild(li);
}
