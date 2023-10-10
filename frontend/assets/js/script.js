let btnLogin = document.querySelector('.btn-signin');
let btnCadastrar = document.querySelector('.btn-signup');
let contentLogin = document.querySelector('.content-signin-form');
let contentCadastrar = document.querySelector('.content-signup-form');
let contentSignIn = document.querySelector('.content-signin-welcome');
let contentSignUp = document.querySelector('.content-signup-welcome');

btnCadastrar.addEventListener('click', (e) => {
    e.preventDefault();
    
    contentCadastrar.style.transform = "translateX(0)";
    contentCadastrar.style.opacity = "1"
    contentSignUp.style.transform = "translateX(100%)";
    contentSignUp.style.opacity = "0"
    contentLogin.style.transform = "translateX(-100%)";
    contentLogin.style.opacity = "0"
    contentSignIn.style.transform = "translateX(0)";
    contentSignIn.style.opacity = "1";
});

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    contentCadastrar.style.transform = "translateX(100%)";
    contentCadastrar.style.opacity = "0"
    contentSignUp.style.transform = "translateX(0)";
    contentSignUp.style.opacity = "1"
    contentLogin.style.transform = "translateX(0)";
    contentLogin.style.opacity = "1"
    contentSignIn.style.transform = "translateX(-100%)";
    contentSignIn.style.opacity = "0";
});