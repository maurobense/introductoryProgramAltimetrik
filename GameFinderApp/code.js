document.getElementById('eye').onclick = function(){
    let icon = document.getElementById('icon');
    let pass = document.getElementById('usr_pass');

    if(pass.type == "password"){
        pass.type = "text"
        icon.innerText = "visibility_off"
    }else{
        pass.type = "password";
        icon.innerText = "visibility"
    }
}

let index = 1;
let body = document.querySelector('#body');
let bodyStyle = window.getComputedStyle(body);
let bodyBackground = bodyStyle.getPropertyValue('background');
let slider = document.querySelectorAll('.slides');
//background: url(img/carousel.png)#C4C4C4;

document.getElementById('right').onclick = function(){
    if(index == 6){
        index = 0;
    }
    index++;
    let slideSelect = document.querySelector(`#slide_${index}`);
    body.style.background = `url(img/carousel${index}.png)#C4C4C4`; 
    body.style.backgroundSize = 'cover';
    body.style.backgroundRepeat = 'no-repeat';
    for(let i = 0; i < slider.length;i++){
        slider[i].style.background = '#5151513f';
    }
    slideSelect.style.background = '#515151';
    
}

document.getElementById('left').onclick = function(){
    if(index == 1){
        index = 7;
    }
    index--;
    let slideSelect = document.querySelector(`#slide_${index}`);
    body.style.background = `url(img/carousel${index}.png)#C4C4C4`; 
    body.style.backgroundSize = 'cover';
    body.style.backgroundRepeat = 'no-repeat';
    for(let i = 0; i < slider.length;i++){
        slider[i].style.background = '#5151513f';
    }
    slideSelect.style.background = '#515151';

    
}