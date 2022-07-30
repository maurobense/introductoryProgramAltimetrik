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
        key = "fed8a0f56e2446908622753eff336b7a";
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
