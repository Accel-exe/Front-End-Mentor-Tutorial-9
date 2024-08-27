const error = document.getElementById('error');
const getEmail = document.getElementById('email');
const btn = document.getElementById('btn');
const main = document.getElementById('main');
const main2 = document.getElementById('main2');
const sEmail = document.getElementById('Email')
const btnMain = document.getElementById('btnMain');

btn.addEventListener("click",() => {
    let email = getEmail.value;
    if ((email != "") && (email != null) && (email != undefined)) {
        if ((email.includes("@")) && (email.includes(".com"))) {
        sEmail.innerHTML = email;
        main.style.display = "none";
        main2.style.display = "flex";
    }else{erro()}
    }else{limp()}
})

btnMain.addEventListener("click",() => {
    main.style.display = "flex";
    main2.style.display = "none";
})

getEmail.addEventListener('click',() => {
    limp();
})

function limp() {
    getEmail.focus();
    getEmail.value = "";
    error.style.display = "none";
    getEmail.classList.remove('fail'); 
}

function erro() {
    error.style.display = "inline";
    getEmail.focus();
    getEmail.classList.add('fail'); 
}


