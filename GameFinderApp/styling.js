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
    if(hamb){
    display_menu();
    }
    bar.style.display = 'none';

    nav.style.display = 'block';
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

function one() {
    const descs = document.getElementsByClassName('game_description');
    const cards = document.getElementsByTagName('article');

    if (one_col) {
        one_col = false;
        grid.className = "grid"
        for (let i = 0; i < cards.length; i++) {
            articles[i].children[1].className = "wrapper"
            articles[i].children[0].className = "img-cont"
            articles[i].className = "card"
            articles[i].children[1].children[0].className = "one"
            articles[i].children[1].children[1].className = "two"
            articles[i].children[1].children[2].className = "three"
            articles[i].children[1].children[3].className = "four"
            articles[i].children[1].children[4].className = "five"
            articles[i].children[1].children[5].className = "six"
            articles[i].children[1].children[6].className = "game_description"

        }

    } else {
        one_col = true;
        grid.className = "grid1"

        for (let i = 0; i < cards.length; i++) {
            articles[i].className = "card1"
            articles[i].children[1].className = "wrapper1"
            articles[i].children[0].className = "img-cont1"
            articles[i].children[1].children[0].className = "one1"
            articles[i].children[1].children[1].className = "two1"
            articles[i].children[1].children[2].className = "three1"
            articles[i].children[1].children[3].className = "four1"
            articles[i].children[1].children[4].className = "five1"
            articles[i].children[1].children[5].className = "six1"
            articles[i].children[1].children[6].className = "game_description1"


        }

    }
}

function go_modal(game) {
    if (game != null) {
        let modal = document.getElementById('mod');
        modal.addEventListener('click', function (e) {
            if (!e.target.closest('.modal') || e.target.closest('.close')) {
                close_modal();
            }
        })
        let icons = ''
        let platforms = '';
        let publishers = '';
        let developers = '';
        let movie = () => {
            if (game.movie != undefined) {
                return ` <video controls>
                <source src="${game.movie}"
                    type="video/mp4">
            </video>`;
            } else {
                return `<div class="no-trailer"><p >No trailer available</p></div>`
            }
        }
        for (let i = 0; i < game.parent_platforms.length; i++) {
            if (i == game.parent_platforms.length - 1) {
                platforms += game.parent_platforms[i].platform.name;
            } else {
                platforms += `${game.parent_platforms[i].platform.name}, `;
            }
        }
        for (let i = 0; i < game.publishers.length; i++) {
            if (i == game.publishers.length - 1) {
                publishers += game.publishers[i].name;
            } else {
                publishers += `${game.publishers[i].name}, `;
            }
        }
        for (let i = 0; i < game.developers.length; i++) {
            if (i == game.developers.length - 1) {
                developers += game.developers[i].name;
            } else {
                developers += `${game.developers[i].name}, `;
            }
        }
        for (let i = 0; i < game.parent_platforms.length; i++) {
            let myPlat = assign_icon(game.parent_platforms[i].platform.name);
            icons += myPlat;
        }
        modal.style.display = 'block';
        modal.innerHTML += ` 
    <div class="modal-back">
        <div>
        <img class="modal-pic" src="${game.background_image}">
        </div>
        <div class="modal">
        <span class="close"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5856 10.5865C10.9606 10.2115 11.4692 10.0009 11.9996 10.0009C12.5299 10.0009 13.0385 10.2115 13.4136 10.5865L23.9996 21.173L34.5856 10.5865C34.7701 10.3955 34.9908 10.2431 35.2348 10.1383C35.4788 10.0334 35.7412 9.97827 36.0068 9.97597C36.2723 9.97366 36.5357 10.0243 36.7815 10.1248C37.0273 10.2254 37.2506 10.3739 37.4384 10.5617C37.6261 10.7495 37.7747 10.9728 37.8752 11.2186C37.9758 11.4644 38.0264 11.7278 38.0241 11.9934C38.0218 12.2589 37.9666 12.5214 37.8618 12.7654C37.757 13.0094 37.6046 13.2301 37.4136 13.4146L26.8276 24.0011L37.4136 34.5877C37.7779 34.9649 37.9795 35.4701 37.9749 35.9945C37.9704 36.5189 37.76 37.0206 37.3892 37.3914C37.0184 37.7623 36.5168 37.9726 35.9924 37.9772C35.468 37.9817 34.9628 37.7801 34.5856 37.4158L23.9996 26.8293L13.4136 37.4158C13.0364 37.7801 12.5312 37.9817 12.0068 37.9772C11.4824 37.9726 10.9808 37.7623 10.6099 37.3914C10.2391 37.0206 10.0288 36.5189 10.0242 35.9945C10.0197 35.4701 10.2213 34.9649 10.5856 34.5877L21.1716 24.0011L10.5856 13.4146C10.2106 13.0396 10 12.5309 10 12.0006C10 11.4702 10.2106 10.9616 10.5856 10.5865Z"/>
                    </svg></span>
            <div class="div-cont">
                <div class="modal-title">
                    <div class="icons">
                       ${icons}
                    </div>
                    <div class="modal-game-title">
                        <h4>${game.name}</h4>
                    </div>
                    <div class="chips-cont">
                        <div class="modal-date">
                            <p>${date_short(game.released)}</p>
                        </div>
                        <div class="modal-top"><p><strong>1#</strong> TOP 2021</p></div>
                        <div class="modal-rpg"><p><strong>#9</strong>RPG</p></div>
                    </div>
                </div>
                <div class="modal-info">
                    <div class="modal-desc">
                        ${game.description}
                    </div>
                    <div class="modal-btn-cont">
                        <div class="modal-btn wish">
                            <p>Add to wishlist<span></span></p>
                        </div>
                        <div class="modal-btn purchase">
                            <p>Purchase</p>
                        </div>
                    </div>
                    <div class="modal-data-cont">
                        <div>
                            <h5>Platforms</h5>
                            <p>${platforms}</p>
                        </div>
                        <div>
                            <h5>Genre</h5>
                            <p>Action, RPG</p>
                        </div>
                        <div>
                            <h5>Release date</h5>
                            <p>${date_nice(game.released)}</p>
                        </div>
                        <div>
                            <h5>Developer</h5>
                            <p>${developers}</p>
                        </div>
                        <div>
                            <h5>Publisher</h5>
                            <p>${publishers !== "" ? publishers : `Unknown publishers`}</p>
                        </div>
                        <div>
                            <h5>Age rating</h5>
                            <p>${game.esrb_rating !== null ? game.esrb_rating.name : `Not rated`}</p>
                        </div>
                        <div>
                            <h5>Website</h5>
                            <p>${game.website !== "" ? game.website : `No website available`}</p>
                        </div>
                        <div class="socials">
                            <icon><svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.7666 20.4307L27.7678 20.4342C28.1528 20.9358 28.3371 22.6029 25.6969 22.3066C24.6128 22.2007 23.5472 21.9536 22.5271 21.5716C21.7298 21.2659 20.9672 20.8764 20.2521 20.4097C19.1924 20.8361 18.07 21.086 16.9294 21.1493C16.1155 22.2415 15.0575 23.1282 13.8399 23.7387C12.6222 24.3492 11.2787 24.6666 9.9166 24.6655C8.99755 24.6663 8.08411 24.5222 7.20994 24.2385C6.6966 24.536 6.11327 24.8265 5.46927 25.0703C4.1626 25.5649 3.07877 25.7504 2.29944 25.8053C1.7161 25.8484 1.30427 25.8181 1.10127 25.7948C0.655603 25.7434 0.256603 25.4891 0.0839368 25.0621C0.00978686 24.8774 -0.0158467 24.6767 0.00947561 24.4792C0.0347979 24.2818 0.110233 24.0941 0.228603 23.934C0.522603 23.5315 0.79327 23.1104 1.04994 22.6834C1.54927 21.8504 2.03927 20.9522 2.16294 19.9745C1.61584 18.9301 1.28547 17.786 1.19167 16.6107C1.09786 15.4354 1.24257 14.2533 1.61709 13.1354C1.9916 12.0174 2.58821 10.9867 3.37108 10.1051C4.15394 9.22352 5.10692 8.50922 6.17277 8.00512C6.54594 6.59531 7.20873 5.27869 8.1189 4.13917C9.02907 2.99966 10.1667 2.06224 11.4592 1.38666C12.7517 0.711084 14.1708 0.31216 15.626 0.215316C17.0812 0.118471 18.5406 0.325829 19.9113 0.824175C21.2819 1.32252 22.5337 2.10093 23.5868 3.10978C24.64 4.11863 25.4714 5.33581 26.0281 6.68375C26.5849 8.03168 26.8547 9.4808 26.8203 10.9388C26.786 12.3967 26.4483 13.8315 25.8288 15.1518C25.6071 17.163 26.6186 18.8558 27.7654 20.4307H27.7666ZM8.1666 10.6662C8.16724 9.43561 8.44598 8.22112 8.98199 7.11344C9.518 6.00576 10.2974 5.03352 11.262 4.26939C12.2266 3.50526 13.3514 2.96898 14.5524 2.70065C15.7534 2.43231 16.9995 2.43884 18.1976 2.71976C19.3957 3.00068 20.5149 3.54871 21.4714 4.32292C22.4279 5.09712 23.1971 6.07748 23.7214 7.19072C24.2458 8.30396 24.5118 9.52131 24.4995 10.7518C24.4873 11.9823 24.1971 13.1941 23.6506 14.2966C23.5946 14.4093 23.5572 14.5302 23.5398 14.6548C23.2843 16.4922 23.7148 18.1675 24.5956 19.7762C23.3214 19.4662 22.1205 18.9093 21.0606 18.1371C20.8903 18.0136 20.6899 17.9385 20.4804 17.9196C20.2709 17.9007 20.0602 17.9388 19.8706 18.0298C18.6254 18.6282 17.2488 18.9009 15.8695 18.8224C14.4903 18.744 13.1535 18.317 11.9842 17.5813C10.8149 16.8456 9.8513 15.8253 9.18365 14.616C8.51599 13.4066 8.16607 12.0476 8.1666 10.6662ZM5.83794 10.9625C5.90356 13.2834 6.73632 15.5171 8.20607 17.3146C9.67582 19.1121 11.6997 20.372 13.9614 20.8973C12.8189 21.8277 11.39 22.3346 9.9166 22.3323C9.06494 22.3323 8.25644 22.1678 7.51677 21.8691C7.34362 21.7991 7.15618 21.7716 6.97021 21.7891C6.78425 21.8065 6.60519 21.8684 6.4481 21.9694C5.93594 22.2996 5.3281 22.6286 4.6421 22.8887C4.23645 23.0434 3.82146 23.1724 3.3996 23.2749C3.7881 22.5667 4.18127 21.7233 4.36094 20.93C4.45077 20.5368 4.50094 20.1554 4.52194 19.7972C4.53617 19.5669 4.48177 19.3375 4.3656 19.1381C3.79639 18.1598 3.49762 17.0477 3.49994 15.9159C3.49994 13.921 4.40994 12.1396 5.83794 10.9625Z" fill="#5FE19B"/>
                                </svg></icon>
                            <icon><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8022 5.76804C12.5688 6.94987 12.1768 8.72321 10.7418 10.1582C10.6112 10.2889 10.4677 10.4265 10.316 10.5735C8.98366 11.858 7.00033 13.7714 7.00033 16.9167C7.00033 18.6235 7.73532 20.2417 8.86816 21.4375C10.008 22.6404 11.4675 23.3334 12.8337 23.3334H18.667C19.0777 23.3334 19.4207 23.2284 19.6237 23.0919C19.7928 22.9799 19.8337 22.8819 19.8337 22.75C19.8337 22.6194 19.7928 22.5202 19.6237 22.4082C19.4207 22.2729 19.0777 22.1667 18.667 22.1667H17.5003C17.1909 22.1667 16.8942 22.0438 16.6754 21.825C16.4566 21.6062 16.3337 21.3095 16.3337 21C16.3337 20.6906 16.4566 20.3939 16.6754 20.1751C16.8942 19.9563 17.1909 19.8334 17.5003 19.8334H19.2503C19.661 19.8334 20.004 19.7284 20.207 19.5919C20.3762 19.4799 20.417 19.3819 20.417 19.25C20.417 19.1194 20.3762 19.0202 20.207 18.9082C20.004 18.7729 19.661 18.6667 19.2503 18.6667H18.0837C17.7742 18.6667 17.4775 18.5438 17.2587 18.325C17.0399 18.1062 16.917 17.8095 16.917 17.5C16.917 17.1906 17.0399 16.8939 17.2587 16.6751C17.4775 16.4563 17.7742 16.3334 18.0837 16.3334H19.8337C20.2443 16.3334 20.5873 16.2284 20.7903 16.0919C20.9595 15.9799 21.0003 15.8819 21.0003 15.75C21.0003 15.6194 20.9595 15.5202 20.7903 15.4082C20.5873 15.2729 20.2443 15.1667 19.8337 15.1667H18.667C18.3576 15.1667 18.0608 15.0438 17.842 14.825C17.6232 14.6062 17.5003 14.3095 17.5003 14C17.5003 13.6906 17.6232 13.3939 17.842 13.1751C18.0608 12.9563 18.3576 12.8334 18.667 12.8334H19.8337C20.2443 12.8334 20.5873 12.7284 20.7903 12.5919C20.9595 12.4799 21.0003 12.3819 21.0003 12.25C21.0003 12.1194 20.9595 12.0202 20.7903 11.9082C20.5873 11.7729 20.2443 11.6667 19.8337 11.6667H14.5837C14.3982 11.6668 14.2153 11.6226 14.0503 11.5378C13.8854 11.4531 13.7429 11.3302 13.6349 11.1794C13.5269 11.0287 13.4564 10.8543 13.4292 10.6708C13.4021 10.4873 13.4191 10.3 13.4788 10.1244V10.1232L13.4835 10.1115L13.4987 10.0649L13.5605 9.86654C13.6118 9.69154 13.683 9.43837 13.7565 9.13387C13.9339 8.42023 14.0425 7.69123 14.0808 6.95687C14.1112 6.15771 14.005 5.54521 13.7915 5.17187C13.6655 4.95021 13.4753 4.75071 13.0332 4.68771C12.9772 4.87904 12.9258 5.14037 12.8512 5.52304L12.8022 5.76804ZM16.1038 9.33337C16.2462 8.68237 16.3815 7.87154 16.413 7.04321C16.448 6.09237 16.3547 4.95487 15.818 4.01571C15.223 2.97037 14.1707 2.33337 12.717 2.33337C12.2713 2.33337 11.8537 2.48037 11.5153 2.77671C11.2085 3.04504 11.0335 3.37871 10.925 3.64704C10.7523 4.07521 10.645 4.63054 10.5552 5.09954L10.5132 5.31537C10.2868 6.46687 9.99049 7.61021 9.09216 8.50854C8.98949 8.61121 8.86466 8.73021 8.72232 8.86437C7.41216 10.1057 4.66699 12.7085 4.66699 16.9167C4.66699 19.2932 5.68199 21.4667 7.17416 23.0417C8.65933 24.6097 10.6998 25.6667 12.8337 25.6667H18.667C19.423 25.6667 20.2467 25.48 20.9187 25.0332C21.6245 24.5619 22.167 23.7849 22.167 22.75C22.167 22.2029 22.0153 21.7292 21.7703 21.3325C22.3408 20.8542 22.7503 20.1507 22.7503 19.25C22.7503 18.7029 22.5987 18.228 22.3537 17.8337C22.9242 17.3554 23.3337 16.6507 23.3337 15.75C23.3337 15.0395 23.0793 14.4515 22.6908 14C23.0782 13.5485 23.3337 12.9605 23.3337 12.25C23.3337 11.214 22.7912 10.4382 22.0853 9.96687C21.4133 9.51887 20.5897 9.33337 19.8337 9.33337H16.1038Z" fill="#5FE19B"/>
                                </svg>
                                </icon>
                            <icon><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1748 2.6752C13.3936 2.45649 13.6903 2.33362 13.9997 2.33362C14.309 2.33362 14.6057 2.45649 14.8245 2.6752L19.4912 7.34187C19.7037 7.56191 19.8213 7.85661 19.8186 8.1625C19.816 8.4684 19.6933 8.76101 19.477 8.97732C19.2607 9.19363 18.968 9.31633 18.6621 9.31899C18.3562 9.32165 18.0615 9.20405 17.8415 8.99154L15.1663 6.31637V17.5C15.1663 17.8095 15.0434 18.1062 14.8246 18.325C14.6058 18.5438 14.3091 18.6667 13.9997 18.6667C13.6903 18.6667 13.3935 18.5438 13.1747 18.325C12.9559 18.1062 12.833 17.8095 12.833 17.5V6.31637L10.1578 8.99154C9.93781 9.20405 9.6431 9.32165 9.33721 9.31899C9.03131 9.31633 8.7387 9.19363 8.52239 8.97732C8.30608 8.76101 8.18338 8.4684 8.18072 8.1625C8.17806 7.85661 8.29566 7.56191 8.50818 7.34187L13.1748 2.6752ZM5.83301 15.1667C5.83301 14.2384 6.20176 13.3482 6.85813 12.6918C7.51451 12.0355 8.40475 11.6667 9.33301 11.6667H10.4997C10.8091 11.6667 11.1058 11.7896 11.3246 12.0084C11.5434 12.2272 11.6663 12.524 11.6663 12.8334C11.6663 13.1428 11.5434 13.4395 11.3246 13.6583C11.1058 13.8771 10.8091 14 10.4997 14H9.33301C9.02359 14 8.72684 14.123 8.50805 14.3417C8.28926 14.5605 8.16634 14.8573 8.16634 15.1667V22.1667C8.16634 22.4761 8.28926 22.7729 8.50805 22.9917C8.72684 23.2105 9.02359 23.3334 9.33301 23.3334H18.6663C18.9758 23.3334 19.2725 23.2105 19.4913 22.9917C19.7101 22.7729 19.833 22.4761 19.833 22.1667V15.1667C19.833 14.8573 19.7101 14.5605 19.4913 14.3417C19.2725 14.123 18.9758 14 18.6663 14H17.4997C17.1903 14 16.8935 13.8771 16.6747 13.6583C16.4559 13.4395 16.333 13.1428 16.333 12.8334C16.333 12.524 16.4559 12.2272 16.6747 12.0084C16.8935 11.7896 17.1903 11.6667 17.4997 11.6667H18.6663C19.5946 11.6667 20.4848 12.0355 21.1412 12.6918C21.7976 13.3482 22.1663 14.2384 22.1663 15.1667V22.1667C22.1663 23.095 21.7976 23.9852 21.1412 24.6416C20.4848 25.298 19.5946 25.6667 18.6663 25.6667H9.33301C8.40475 25.6667 7.51451 25.298 6.85813 24.6416C6.20176 23.9852 5.83301 23.095 5.83301 22.1667V15.1667Z" fill="#5FE19B"/>
                                </svg></icon>
                        </div>





                    </div>


                </div>

                <div class="modal-gallery">
                    <div class="video">
                        ${movie()}
                    </div>
                    <div class="photo1">
                        <img src=${game.short_screenshots[1]?.image} alt="Nice image of ${game.name}">
                    </div>
                    <div class="photo2">
                    <img src=${game.short_screenshots[2]?.image} alt="Nice image of ${game.name}">
                    </div>
                    <div class="photo3">
                    <img src=${game.short_screenshots[3]?.image} alt="Nice image of ${game.name}">
                    </div>
                    <div class="photo4">
                    <img src=${game.short_screenshots[4]?.image} alt="Nice image of ${game.name}">
                    </div>
                </div>

            </div>
        </div>
    </div>
`;
    }
}
function close_modal() {
    let modal = document.getElementById('mod');
    modal.innerHTML = '';
    modal.style.display = 'none';
}
let hamb = false;
function display_menu() {
    let show_hamb = document.getElementsByClassName('show-hamb');

    if (!hamb) {
        hamb = true;
        bar.style.display = 'none';
        profile.style.setProperty('opacity', '1');
        for (let i = 0; i < show_hamb.length; i++) {
            show_hamb[i].style.display = 'block'
        }
    }else{
        hamb = false;
        profile.style.setProperty('opacity', '0');
        bar.style.display = 'block'
        for (let i = 0; i < show_hamb.length; i++) {
            show_hamb[i].style.display = 'none'
        }
        nav.style.display = 'none';
    }
}