function switchDark() {
    if (!darkMode) {
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
        document.documentElement.style.setProperty('--slides', '#ffffff30')
        document.documentElement.style.setProperty('--sso-color', '#FFFFFF')
        document.documentElement.style.setProperty('--article-background', '#303030')
        document.documentElement.style.setProperty('--main-background', '#151515')
        document.documentElement.style.setProperty('--footer-effect', 'linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, #000000 100%)')

        bodyInjection();


    } else {
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
        document.documentElement.style.setProperty('--slides', '#5151513f');
        document.documentElement.style.setProperty('--sso-color', '#36B972');
        document.documentElement.style.setProperty('--article-background', '#FFFFFF');
        document.documentElement.style.setProperty('--main-background', '#E5E5E5');
        document.documentElement.style.setProperty('--footer-effect', 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F0F0F0 100%)')

        head.style.backgroundColor = 'rgba(255, 255, 255, 0.251)';

        bodyInjection();
    }
}


document.getElementById('eye').onclick = function () {
    let icon = document.getElementById('icon');
    let pass = document.getElementById('usr_pass');

    if (pass.type == "password") {
        pass.type = "text"
        icon.innerText = "visibility_off"
    } else {
        pass.type = "password";
        icon.innerText = "visibility"
    }
}



function rightArrow() {
    if (index == 6) {
        index = 0;
    }
    index++;
    bodyInjection();
}

function leftArrow() {
    if (index == 1) {
        index = 7;
    }
    index--;
    bodyInjection();
}
function log_out() {
    localStorage.clear();
    game_finder.style.display = 'none';
    login_screen.style.display = 'block';
    profile.style.display = 'none';
    bar.style.display = 'none';
    initials.innerHTML = '';
}
function bodyInjection() {

    if (!darkMode) {
        let slideSelect = document.querySelector(`#slide_${index}`);
        body.style.background = `url(img/carousel${index}.png)#C4C4C4`;
        body.style.backgroundSize = 'cover';
        body.style.backgroundRepeat = 'no-repeat';
        for (let i = 0; i < slider.length; i++) {
            slider[i].style.background = 'var(--slides)';
        }
        slideSelect.style.background = 'var(--text-color)';
    } else {
        let slideSelect = document.querySelector(`#slide_${index}`);
        body.style.background = `url(img/carouselD${index}.png)#C4C4C4`;
        body.style.backgroundSize = 'cover';
        body.style.backgroundRepeat = 'no-repeat';
        for (let i = 0; i < slider.length; i++) {
            slider[i].style.background = 'var(--slides)';
        }
        slideSelect.style.background = 'var(--text-color)';

    }
}




function login_injection() {
    profile.style.setProperty('position', 'fixed');
    profile.style.setProperty('z-index', '3');
    profile.style.setProperty('right', '40px');
    profile.style.setProperty('top', '23px');
    profile.style.setProperty('display', 'flex');
    profile.style.setProperty('align-items', 'center');
    profile_pic.style.setProperty('background-size', 'contain');
}


function loginRequest() {
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
        .then(response => {
            if (!response.ok) { throw response }
            return response.json()
        })
        .then(response => login(response))
        .catch(error => {
            error.text().then(error => login_error(JSON.parse(error)))
        })

}

function error_email() {
    inp_usr.style.border = '#FB5F5F 1px solid';
    inp_usr.style.outlineColor = '#FB5F5F';
    inp_usr.value = '';
}
function error_password() {
    inp_pass.style.border = '#FB5F5F 1px solid';
    inp_pass.style.outlineColor = '#FB5F5F';
    eye.style.color = '#FB5F5F';
    inp_pass.value = '';
    inp_usr.style.border = '#36B972 1px solid';
    inp_usr.style.outlineColor = '#36B972';
}
function login_error(msj) {
    switch (msj) {
        case 'Incorrect password':
            inp_pass.placeholder = 'Incorrect password';
            error_password();
            break;

        case 'Password is too short':
            inp_pass.placeholder = 'Password is too short';
            error_password();
            break;
        case 'Cannot find user':
            inp_usr.placeholder = 'Cannot find user';
            error_email();
            break;
        case 'Email format is invalid':
            inp_usr.placeholder = 'Email format is invalid';
            error_email();
            break;
    }

}
function login(data) {
    const user = document.getElementById('usr_login').value;
    const pass = document.getElementById('usr_pass').value;

    if (myForm.check.checked) {
        localStorage.setItem('jwt', data.accessToken)
        localStorage.setItem('id', data.user.id)
        localStorage.setItem('mail', data.user.email)
        localStorage.setItem('username', data.user.username)
        localStorage.setItem('pic', data.user.img)
    }


    if (jwt_decode(data.accessToken).sub == data.user.id) {
        key = "e86fafc42b07483884668b87aafd6e9d";
        myForm.reset();
        login_screen.style.display = 'none';
        game_finder.style.display = 'block';
        eye.style.color = '#36B972';
        inp_pass.placeholder = 'Password';
        inp_pass.style.outlineColor = 'transparent';
        inp_pass.style.border = '1px solid transparent';
        inp_usr.style.border = '1px solid transparent';
        inp_usr.style.outlineColor = 'transparent';

        if (data.user.img != undefined) {
            profile_pic.style.setProperty('background-image', `url(${data.user.img})`);
        } else {
            profile_pic.style.setProperty('background', `#5F81FB`);
            initials.innerHTML = data.user.email.substring(0, 2).toUpperCase();
        }
        bar.style.display = 'block';
        profile.style.display = 'block';
        login_injection();
        loadGames();

    }
}

function one(){
    const descs = document.getElementsByClassName('game_description');
    const cards= document.getElementsByTagName('article');

    if(one_col){
        one_col = false;        
        grid.className = "grid"
        for(let i = 0;i < cards.length;i++){
            articles[i].children[1].className = "wrapper"
            articles[i].children[0].className = "img-cont"
            articles[i].className = "card"
            articles[i].children[1].children[0].className = "one"
            articles[i].children[1].children[1].className = "two"
            articles[i].children[1].children[2].className = "three"
            articles[i].children[1].children[3].className = "four"
            articles[i].children[1].children[4].className = "five"
            articles[i].children[1].children[5].className = "six"
            descs[i].style.display = "none"
        }
        
    }else{
        one_col = true;
        grid.className = "grid1"

        for(let i = 0;i < cards.length;i++){
            articles[i].className = "card1"
            articles[i].children[1].className = "wrapper1"
            articles[i].children[0].className = "img-cont1"
            articles[i].children[1].children[0].className = "one1"
            articles[i].children[1].children[1].className = "two1"
            articles[i].children[1].children[2].className = "three1"
            articles[i].children[1].children[3].className = "four1"
            articles[i].children[1].children[4].className = "five1"
            articles[i].children[1].children[5].className = "six1"
            descs[i].style.display = "block"

        }

    }
}