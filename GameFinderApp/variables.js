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
let games_list = [];
let myForm = document.getElementById('form');
let articles = document.getElementsByTagName('article');
let one_col = false;
let cc = () => {
    if(one_col){
        return "1"
    }
    return ""
}