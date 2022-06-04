document.getElementById('right').addEventListener('click', rightArrow);
document.getElementById('left').addEventListener('click', leftArrow)
document.getElementById('darkMode').addEventListener('click', switchDark);
document.getElementById('submit').addEventListener('click', loginRequest)



let index = 1;
let body = document.querySelector('#loginScreen');
let slider = document.querySelectorAll('.slides');
let darkMode = false;
let on = document.querySelector('#on');
let off = document.querySelector('#off');
let sw = document.querySelector('.switch');
let head = document.getElementById('headerLogin')
let login_screen = document.getElementById('loginScreen');
let game_finder = document.getElementById('gameFinder');
let key;




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

let myForm = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

});


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
        .then(response => (response.ok) ? response.json() : response.text())
        .then(data => login(data))//jwt_decode(data.accessToken)))
        .catch(error => console.log(error))

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
        key = "e86fafc42b07483884668b87aafd6e9d"
    }
    console.log(data);
    console.log('Game Finder API: ' + key);
    myForm.reset();
    login_screen.style.display = 'none';
    game_finder.style.display = 'block';
    loadGames();
}
let grid = document.getElementById('gridGames');
let myGames = [];
let n = 1;
let c = 0;
function callbackGames(games) {
    console.log(games);
    for (let i = 0; i < games.length; i++) {
        c++;
        let plat = "";
        let gen = "";
        for (let f = 0; f < games[i].genres.length; f++) {
            if (f == games[i].genres.length - 1) {
                gen += `${games[i].genres[f].name}`
            } else {
                gen += `${games[i].genres[f].name}, `
            }

        }

        myGames.push(games[i]);
        grid.innerHTML += ` <article class="card">
        <div class="img"><img src="${games[i].background_image}">
        </div>
        <div class="wrapper">
            <div class="one">
                <h3 class="title">${games[i].name}<span id="pos">#${c}</span></h3>
            </div>
            <div class="two">
                <p>Release date:</p>
            </div>
            <div class="three">
                <p>${games[i].released}</p>
            </div>
            <div class="four">
                <p>${plat}</p>
            </div>
            <div class="five">
                <p>Genres:</p>
            </div>
            <div class="six">
                <p>${gen}</p>
            </div>
        </div>
    </article>
    `
    }
    while (n < 5) {
        n++;
        loadGames();
    }

}
function loadGames() {
    setTimeout(function(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,

    };
    
    fetch(`https://api.rawg.io/api/games?=&key=${key}&page=${n}`, requestOptions)
        .then(response => (response.ok) ? response.json() : response.text())
        .then(data => callbackGames(data.results))
        .catch(error => console.log(error))
    },500);
}
window.onload = function () {


    if (localStorage.jwt != undefined) {
        let token = localStorage.getItem('jwt');
        let id_user = localStorage.getItem('id')
        if (jwt_decode(token).sub == id_user) {
            key = "e86fafc42b07483884668b87aafd6e9d"
        }
    }

    if(key != undefined){
        login_screen.style.display = 'none';
        game_finder.style.display = 'block';
        loadGames();
    }
};