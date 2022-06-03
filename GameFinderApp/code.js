let index = 1;
let body = document.querySelector('#loginScreen');
let slider = document.querySelectorAll('.slides');
let darkMode = false;
let on = document.querySelector('#on');
let off = document.querySelector('#off');
let sw = document.querySelector('.switch');
let head = document.getElementById('headerLogin')
document.getElementById('right').addEventListener('click', rightArrow);
document.getElementById('left').addEventListener('click', leftArrow)
document.getElementById('darkMode').addEventListener('click', switchDark);

function switchDark(){
    if(!darkMode){
        index = 1;
        darkMode = true;
        on.style.backgroundColor = 'transparent';
        on.children[0].style.zIndex = 1;
        on.children[0].style.color = '#FFFFFF';
        off.style.backgroundColor = '#FFFFFF';
        off.children[0].style.zIndex = -1;
        sw.style.backgroundColor = '#5F81FB';
        head.style.backgroundColor = 'transparent'
        document.documentElement.style.setProperty('--text-color', '#FFFFFF');
        document.documentElement.style.setProperty('--form-background', 'rgb(0 0 0 / 80%)');
        document.documentElement.style.setProperty('--slider-background', '#515151');
        document.documentElement.style.setProperty('--slides','#ffffff30')
        document.documentElement.style.setProperty('--sso-color','#FFFFFF')
        
        bodyInjection();
        

    }else{
        index = 1;
        darkMode = false;
        on.style.backgroundColor = '#FFFFFF';
        on.children[0].style.zIndex = -1;
        off.style.backgroundColor = 'transparent';
        off.children[0].style.zIndex = 1;
        sw.style.backgroundColor = '#E1E1E4';
        document.documentElement.style.setProperty('--text-color', '#515151');
        document.documentElement.style.setProperty('--form-background', '#F0F0F0');
        document.documentElement.style.setProperty('--slider-background', '#E1E1E4');
        document.documentElement.style.setProperty('--slides','#5151513f');
        document.documentElement.style.setProperty('--sso-color','#36B972');
        head.style.backgroundColor = 'rgba(255, 255, 255, 0.251)';


        bodyInjection();


    }


}

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



function rightArrow(){
    if(index == 6){
        index = 0;
    }
    index++;
    bodyInjection();
}

function leftArrow(){
    if(index == 1){
        index = 7;
    }
    index--;
    bodyInjection(); 
}

function bodyInjection(){

    if(!darkMode){
    let slideSelect = document.querySelector(`#slide_${index}`);
    body.style.background = `url(img/carousel${index}.png)#C4C4C4`; 
    body.style.backgroundSize = 'cover';
    body.style.backgroundRepeat = 'no-repeat';
    for(let i = 0; i < slider.length;i++){
        slider[i].style.background = 'var(--slides)';
    }
    slideSelect.style.background = 'var(--text-color)';
    }else{
    let slideSelect = document.querySelector(`#slide_${index}`);
    body.style.background = `url(img/carouselD${index}.png)#C4C4C4`; 
    body.style.backgroundSize = 'cover';
    body.style.backgroundRepeat = 'no-repeat';
    for(let i = 0; i < slider.length;i++){
        slider[i].style.background = 'var(--slides)';
    }
    slideSelect.style.background = 'var(--text-color)';

    }
}

let myForm = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    myForm.reset();

});


document.getElementById('submit').onclick = function () {
    const user = document.getElementById('usr_login').value;
    const pass = document.getElementById('usr_pass').value;
        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": `${user}`,
            "password": `${pass}`
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
    
        };

        fetch("http://localhost:3000/login", requestOptions)
            .then(response => (response.ok) ? response.json() : response.text())
            .then(data => console.log(data))//jwt_decode(data.accessToken)))
            .catch(error => console.log(error))

}



