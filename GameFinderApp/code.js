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