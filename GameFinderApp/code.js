document.getElementById('right').addEventListener('click', rightArrow);
document.getElementById('left').addEventListener('click', leftArrow)
document.getElementById('darkMode').addEventListener('click', switchDark);
document.getElementById('submit').addEventListener('click', loginRequest);

let index = 1;
let body = document.querySelector('#loginScreen');
let slider = document.querySelectorAll('.slides');
let darkMode = false;
let searching = false;
let on = document.querySelector('#on');
let off = document.querySelector('#off');
let sw = document.querySelector('.switch');
let head = document.getElementById('headerLogin')
let login_screen = document.getElementById('loginScreen');
let game_finder = document.getElementById('gameFinder');
let layer = document.getElementById('layer');
let inp_search = document.getElementById('inp_search');
let find = document.getElementById('find');
let bar = document.getElementById('searchbar');
let last = document.getElementById('last');
let profile = document.getElementById('profile');
let profile_pic = document.getElementById('pic');
let initials = document.getElementById('initials');
let logout = document.getElementById('logout');
let inp_usr = document.getElementById('usr_login');
let inp_pass = document.getElementById('usr_pass');
let key;
let likes;
let s = 1;
let last_searches = [];

logout.addEventListener('click', log_out);
inp_usr.addEventListener('keyup', function (e) {
    if (validateEmail(inp_usr.value)) {
        inp_usr.style.outlineColor = '#36B972';
    } else {
        inp_usr.style.outlineColor = '#FB5F5F';
    }
})

inp_search.addEventListener('focusin', function () {
    layer.style.display = 'block'
});

inp_search.addEventListener('focusout', function () {
    layer.style.display = 'none';
});

find.addEventListener('click', function () {
    searching = true;
    if (inp_search.value.length == 0) {
        searching = false;
        grid.innerHTML = '';
        c = 0;
        n = 1;
        loadGames()
    } else {
        c = 0;
        grid.innerHTML = '';
        searchGames();
    }

});

last.addEventListener('click', last_two);

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

let myForm = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

});

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
        console.log(data);
        console.log('Game Finder API: ' + key);
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
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
window.onscroll = function () {

    if (game_finder.offsetHeight == scrollY + innerHeight && !searching) {
        n++;
        loadGames();
    }
};

let grid = document.getElementById('gridGames');
let myGames = [];
let n = 1;
let c = 0;

function last_two() {
    searching = true;
    n = 1;
    grid.innerHTML = '';
    for (let i = 0; i < last_searches.length; i++) {
        grid.innerHTML += last_searches[i];
    }
    like_it();
}
function callbackGames(games) {
    let g = games.results.length;
    let myArticles = '';

    if (searching) {
        g = 1;
    }
    for (let i = 0; i < g; i++) {
        var date = new Date(`${games.results[i].released}`);
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        c++;
        let plat = "";
        let gen = "";
        for (let f = 0; f < games.results[i].genres.length; f++) {
            if (f == games.results[i].genres.length - 1) {
                gen += `${games.results[i].genres[f].name}`
            } else {
                gen += `${games.results[i].genres[f].name}, `
            }

        }

        for (let r = 0; r < games.results[i].parent_platforms.length; r++) {
            let myPlat = assign_icon(games.results[i].parent_platforms[r].platform.name);
            plat += myPlat;
        }
        myArticles += ` <article class="card" id="art_${games.results[i].id}">
        <div class="img"><img src="${games.results[i].background_image}"><span><svg data-liked="false" class="like" id="like_${games.results[i].id}" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-outside-1_12_2251" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="17" fill="#FFFFFF">
        <rect fill="white" x="3" y="3" width="18" height="17"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4373 4.43445C11.0427 4.72143 11.5766 5.13976 12 5.659C12.826 4.646 14.09 4 15.5 4C17.976 4 20 5.99 20 8.467C20 10.718 18.733 12.807 17.273 14.511C15.792 16.239 13.976 17.729 12.614 18.789C12.4385 18.9256 12.2224 18.9997 12 18.9997C11.7776 18.9997 11.5615 18.9256 11.386 18.789C10.024 17.729 8.208 16.24 6.727 14.511C5.267 12.807 4 10.718 4 8.467C4 5.99 6.024 4 8.5 4C9.17001 3.99905 9.83181 4.14747 10.4373 4.43445Z"/>
        </mask>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4373 4.43445C11.0427 4.72143 11.5766 5.13976 12 5.659C12.826 4.646 14.09 4 15.5 4C17.976 4 20 5.99 20 8.467C20 10.718 18.733 12.807 17.273 14.511C15.792 16.239 13.976 17.729 12.614 18.789C12.4385 18.9256 12.2224 18.9997 12 18.9997C11.7776 18.9997 11.5615 18.9256 11.386 18.789C10.024 17.729 8.208 16.24 6.727 14.511C5.267 12.807 4 10.718 4 8.467C4 5.99 6.024 4 8.5 4C9.17001 3.99905 9.83181 4.14747 10.4373 4.43445Z" />
        <path d="M12 5.659L11.225 6.29099L12 7.24137L12.775 6.29095L12 5.659ZM10.4373 4.43445L10.0089 5.33807L10.4373 4.43445ZM17.273 14.511L18.0323 15.1618L18.0324 15.1616L17.273 14.511ZM12.614 18.789L13.228 19.5783L13.2282 19.5782L12.614 18.789ZM11.386 18.789L10.7718 19.5782L10.772 19.5783L11.386 18.789ZM6.727 14.511L7.48647 13.8605L7.48638 13.8604L6.727 14.511ZM8.5 4V5.00001L8.50142 5L8.5 4ZM12.775 5.02702C12.2576 4.39259 11.6053 3.88146 10.8656 3.53082L10.0089 5.33807C10.4801 5.56139 10.8955 5.88693 11.225 6.29099L12.775 5.02702ZM15.5 3C13.7788 3 12.2341 3.78953 11.225 5.02706L12.775 6.29095C13.4179 5.50248 14.4012 5 15.5 5V3ZM21 8.467C21 5.42801 18.5185 3 15.5 3V5C17.4335 5 19 6.552 19 8.467H21ZM18.0324 15.1616C19.5402 13.4019 21 11.0817 21 8.467H19C19 10.3543 17.9258 12.2121 16.5136 13.8604L18.0324 15.1616ZM13.2282 19.5782C14.601 18.5098 16.483 16.9694 18.0323 15.1618L16.5137 13.8602C15.101 15.5086 13.351 16.9482 11.9998 17.9998L13.2282 19.5782ZM12 19.9997C12.4448 19.9997 12.8769 19.8514 13.228 19.5783L12 17.9997L12 17.9997V19.9997ZM10.772 19.5783C11.1231 19.8514 11.5552 19.9997 12 19.9997V17.9997V17.9997L10.772 19.5783ZM5.96753 15.1615C7.517 16.9705 9.39929 18.51 10.7718 19.5782L12.0002 17.9998C10.6487 16.948 8.899 15.5095 7.48647 13.8605L5.96753 15.1615ZM3 8.467C3 11.0817 4.45985 13.4019 5.96762 15.1616L7.48638 13.8604C6.07415 12.2121 5 10.3543 5 8.467H3ZM8.5 3C5.48147 3 3 5.42801 3 8.467H5C5 6.552 6.56653 5 8.5 5V3ZM10.8656 3.53082C10.1258 3.18018 9.31722 2.99884 8.49858 3.00001L8.50142 5C9.0228 4.99926 9.5378 5.11476 10.0089 5.33807L10.8656 3.53082Z" fill="#FFFFFF" mask="url(#path-1-outside-1_12_2251)"/>
        </svg>
        </span>
        </div>
        <div class="wrapper">
            <div class="one">
                <h3 class="title">${games.results[i].name}<span id="pos">#${c}</span></h3>
            </div>
            <div class="two">
                <p>Release date:</p>
            </div>
            <div class="three">
                <p>${date.toLocaleDateString("en-EN", options)}</p>
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
    grid.innerHTML += myArticles;
    if (searching) {
        if (last_searches.length == 2) {
            last_searches.shift();
        }
        last_searches.push(myArticles);
    }
    like_it();
}

function like_it() {
    likes = document.querySelectorAll('.like');
    for (let like of likes) {
        let mylike = document.querySelector(`#${like.id}`);
        mylike.addEventListener('click', function () {
            if (like.dataset.liked == "false") {
                like.dataset.liked = 'true';
                like.style.fill = '#FFFFFF'
            } else {
                like.dataset.liked = 'false';
                like.style.fill = 'none';
            }
        });

    }

}



function assign_icon(plat) {
    switch (plat) {
        case 'PlayStation':
            return `<span><svg width="24" height="20" viewBox="0 0 24 20"  xmlns="http://www.w3.org/2000/svg">
        <path d="M9.55176 9.53674e-06L9.55176 18.2774L13.3605 19.5885L13.3605 4.26319C13.3605 3.54103 13.6568 3.06155 14.1321 3.22645C14.7535 3.41372 14.8743 4.07895 14.8743 4.79307L14.8743 10.9138C17.245 12.1606 19.1115 10.9131 19.1115 7.62345C19.1115 4.26188 18.0172 2.76435 14.7973 1.56033C13.5273 1.10084 11.1735 0.325457 9.55176 9.53674e-06Z" />
        <path d="M14.3506 16.913L20.1079 14.3203C20.7592 14.0149 20.8587 13.5999 20.3316 13.3818C19.7962 13.1596 18.8406 13.2232 18.1824 13.5222L14.3506 15.2325V12.5037L14.57 12.412C14.57 12.412 15.6792 11.9149 17.2392 11.7008C18.7962 11.4849 20.7057 11.7289 22.2065 12.4446C23.8971 13.1242 24.0866 14.1153 23.6589 14.8051C23.2249 15.4877 22.1728 15.9815 22.1728 15.9815L14.3506 19.5368"/>
        <path d="M1.7099 17.2146C-0.0868735 16.6443 -0.386499 15.4394 0.433179 14.7434C1.18926 14.1079 2.47691 13.6294 2.47691 13.6294L7.79974 11.4674V13.9281L3.97289 15.4908C3.29503 15.767 3.1934 16.1557 3.73939 16.359C4.29514 16.5706 5.28141 16.5137 5.95966 16.2286L7.79974 15.4728V17.6694C7.68114 17.6921 7.54927 17.715 7.42892 17.7383C5.5943 18.0852 3.63971 17.9428 1.7099 17.2146Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.7661 19.4589C23.6149 19.6145 23.4164 19.7025 23.2027 19.7025C22.989 19.7025 22.784 19.6145 22.6326 19.4589C22.4831 19.3005 22.4004 19.0937 22.4004 18.8707C22.4004 18.4089 22.7591 18.0358 23.2027 18.0358C23.4164 18.0358 23.6149 18.1209 23.7661 18.2799C23.9156 18.4353 24 18.6457 24 18.8707C24 19.0937 23.9156 19.3005 23.7661 19.4589ZM22.5352 18.8707C22.5352 18.6809 22.6033 18.5067 22.7279 18.3777C22.8555 18.2458 23.0258 18.1748 23.2027 18.1748C23.3798 18.1748 23.5458 18.2458 23.6703 18.3777C23.7959 18.5067 23.8638 18.6809 23.8638 18.8707C23.8638 19.2511 23.567 19.5599 23.2027 19.5599C23.0258 19.5599 22.8555 19.4896 22.7279 19.3594C22.6033 19.2281 22.5352 19.0559 22.5352 18.8707ZM23.5677 19.2169C23.5748 19.2384 23.5835 19.2511 23.5958 19.2549L23.607 19.2614V19.3144H23.4334L23.4302 19.3037L23.4184 19.2717C23.4164 19.2549 23.4141 19.2328 23.4117 19.1958L23.404 19.0508C23.402 18.9994 23.3859 18.9695 23.3561 18.9496C23.334 18.942 23.3039 18.936 23.259 18.936H23.018V19.3144H22.8599V18.385H23.2745C23.3421 18.385 23.399 18.3975 23.4426 18.4168C23.53 18.4596 23.5748 18.5369 23.5748 18.6455C23.5748 18.6988 23.5621 18.7488 23.5402 18.7856C23.5212 18.8116 23.4988 18.8354 23.4744 18.8586L23.4809 18.8633C23.4974 18.8754 23.5138 18.8874 23.5235 18.9051C23.5456 18.9306 23.5556 18.9732 23.5574 19.028L23.5614 19.1464C23.5621 19.1767 23.5644 19.2003 23.5677 19.2169ZM23.3807 18.76C23.4063 18.7428 23.4184 18.7086 23.4184 18.6562C23.4184 18.601 23.4001 18.5642 23.3642 18.5458C23.3421 18.5369 23.3146 18.5303 23.2779 18.5303H23.018V18.7914H23.2635C23.3123 18.7914 23.3511 18.7809 23.3807 18.76Z"/>
        </svg></span>`;
        case 'Xbox':
            return `<span><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C11.9286 0 13.5238 0.616246 14.9762 1.65266C15 1.65266 15 1.68067 15 1.70868C15 1.73669 14.9762 1.73669 14.9524 1.73669C13.0952 1.2605 10.2857 3.13725 10.0238 3.33333H10H9.97619C9.71429 3.13725 6.90476 1.2605 5.04762 1.73669C5.02381 1.73669 5 1.73669 5 1.70868C5 1.68067 5 1.65266 5.02381 1.65266C6.47619 0.616246 8.07143 0 10 0ZM16.3903 17.5988C17.8903 16.0464 12.9308 10.5648 10.0035 8.33333C10.0035 8.33333 9.97935 8.33333 9.97935 8.35759C7.07626 10.5648 2.09261 16.0464 3.61674 17.5988C5.31021 19.1026 7.56011 20 10.0035 20C12.447 20 14.6727 19.1026 16.3903 17.5988ZM2.73973 3.38078C2.72831 3.38078 2.7226 3.38705 2.7169 3.39332C2.71119 3.39959 2.70548 3.40585 2.69406 3.40585C1.0274 5.2358 0 7.76763 0 10.5501C0 12.8313 0.707763 14.9621 1.87215 16.6416C1.87215 16.6667 1.89498 16.6667 1.91781 16.6667C1.94064 16.6667 1.94064 16.6416 1.91781 16.6165C1.21005 14.2351 4.79452 8.4946 6.64384 6.0881L6.66667 6.06303C6.66667 6.03796 6.66667 6.03796 6.64384 6.03796C3.83562 2.9797 2.89954 3.30558 2.73973 3.38078ZM13.3333 6.05268L13.3562 6.02759C16.1644 2.99144 17.1005 3.31764 17.2374 3.36782C17.2469 3.36782 17.2525 3.36782 17.2574 3.36962C17.2642 3.37215 17.2698 3.37825 17.2831 3.39291C18.9726 5.22464 20 7.75895 20 10.5442C20 12.8276 19.2922 14.9604 18.1279 16.6416C18.1279 16.6667 18.105 16.6667 18.0822 16.6667V16.6165C18.7671 14.2327 15.2055 8.48662 13.3562 6.07777C13.3333 6.07777 13.3333 6.05268 13.3333 6.05268Z"/>
        </svg></span>`;

        case 'PC':
            return `<span><svg width="20" height="20" viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 9.16667H9.16667V1.53647L20 0V9.16667ZM8.33333 1.66667V9.16667H0V2.77865L8.33333 1.66667ZM8.33333 10H0V17.0992L8.33333 18.3333V10ZM9.16667 18.3262V10H20V20L9.16667 18.3262Z"/>
        </svg></span>`;

        case 'Nintendo':
            return `<span><svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8608 24H14.1696C14.0755 24 14.0001 23.9245 14.0001 23.8302V0.150943C14.0001 0.0754717 14.0566 0 14.1508 0H17.8608C21.2506 0 24.0001 2.75472 24.0001 6.15094V17.8491C24.0001 21.2453 21.2506 24 17.8608 24ZM21.1564 13.2076C21.1564 11.8679 20.0641 10.7736 18.727 10.7736C17.3899 10.7736 16.3165 11.8679 16.2976 13.2076C16.2976 14.5472 17.3899 15.6415 18.727 15.6415C20.0641 15.6415 21.1564 14.5472 21.1564 13.2076Z" />
            <path d="M3.99988 8C3.99988 9.1 4.89988 10 5.99988 10C7.09988 10 7.99988 9.1 7.99988 8C7.99988 6.9 7.09988 6 5.99988 6C4.88321 6 3.99988 6.88333 3.99988 8Z" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.38173 0H11.8238C11.9217 0 12 0.0754717 12 0.169811V23.8302C12 23.9245 11.9217 24 11.8238 24H6.38173C2.85807 24 0 21.2453 0 17.8491V6.15094C0 2.75472 2.85807 0 6.38173 0ZM6.38169 22.0755H10.0032V1.92458H6.38169C5.20714 1.92458 4.11089 2.37741 3.2887 3.16986C2.44694 3.96232 1.99669 5.01892 1.99669 6.15099V17.8491C1.99669 18.9812 2.46652 20.0378 3.2887 20.8302C4.11089 21.6416 5.20714 22.0755 6.38169 22.0755Z" />
            </svg></span>`;
        default: return '';

    }
}
function loadGames() {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,

    };

    fetch(`https://api.rawg.io/api/games?=&key=${key}&page=${n}`, requestOptions)
        .then(response => {
            if (!response.ok) { throw response }
            return response.json()
        })
        .then(response => callbackGames(response))
        .catch(error => {
            error.text().then(error => console.log(JSON.parse(error)))
        })

}
inp_search.addEventListener('keypress', function (e){
    if(e.key == 'Enter'){
        find.click();
        inp_search.blur();
    }
})
function searchGames() {

    let search = document.getElementById('inp_search').value;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,

    };

    fetch(`https://api.rawg.io/api/games?=&key=${key}&page=${s}&search=${search}`, requestOptions)
        .then(response => {
            if (!response.ok) { throw response }
            return response.json()
        })
        .then(response => callbackGames(response))
        .catch(error => {
            error.text().then(error => console.log(JSON.parse(error)))
        })

}
window.onload = function () {

    if (localStorage.jwt != undefined) {
        let token = localStorage.getItem('jwt');
        let id_user = localStorage.getItem('id')
        if (jwt_decode(token).sub == id_user) {
            key = "e86fafc42b07483884668b87aafd6e9d"
        }
    } else {
        game_finder.display = 'none';
        login_screen.display = 'block';
    }

    if (localStorage.pic != undefined) {
        profile_pic.style.setProperty('background-image', `url(${localStorage.pic})`);
    } else {
        profile_pic.style.setProperty('background', `#5F81FB`);
        initials.innerHTML = localStorage.email.substring(0, 2).toUpperCase();
    }
    login_injection();
    profile_pic.style.setProperty('background-size', 'contain');

    if (key != undefined) {
        login_screen.style.display = 'none';
        game_finder.style.display = 'block';
        bar.style.display = 'block';
        loadGames();
    }
};