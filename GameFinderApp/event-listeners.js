document.getElementById('right').addEventListener('click', rightArrow);
document.getElementById('left').addEventListener('click', leftArrow)
document.getElementById('darkMode').addEventListener('click', switchDark);
document.getElementById('submit').addEventListener('click', loginRequest);
document.getElementById('ham-cont').addEventListener('click', display_menu);
document.getElementById('close-ham').addEventListener('click', display_menu);
document.getElementById('toggle').addEventListener('click',one);
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
    document.getElementById('comp').style.display = 'none';
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
        inp_search.value = '';
    }

});

inp_search.addEventListener('keyup', function (e) {
    if (inp_search.value.length >= 3) {

    }
});


last.addEventListener('click', last_two);

inp_search.addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        find.click();
        inp_search.blur();
    }
});

form.addEventListener('submit', function (e) {
    e.preventDefault();

});