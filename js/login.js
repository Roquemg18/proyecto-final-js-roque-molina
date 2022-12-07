//var
let secionIniciada =  JSON.parse((localStorage.getItem('iniciado'))) || false
//selectores
const buttonLogin = document.querySelector('#loginButton')
const conteinerLogin = document.querySelector('#conteinerLogin')
const conteinerSignoff = document.querySelector('#conteinerSignoff')
const buttonSignoff = document.querySelector('#buttonSignoff')
const liRegister = document.querySelector('#liRegister')
const conteinerError = document.querySelector('.errorLogin')



//listerner
buttonLogin.addEventListener('click',comprobarCredenciales)
buttonSignoff.addEventListener('click',cerrarSecion)


//funciones
function comprobarCredenciales (e) {
    e.preventDefault();
    const usuario = JSON.parse(localStorage.getItem('nuevoUsuario'));
    const loginEmail = document.querySelector('#loginEmail').value
    const loginPassword = document.querySelector('#loginPassword').value
    if(loginEmail === usuario.email && loginPassword === usuario.password){
        secionIniciada = true;
    localStorage.setItem('iniciado', JSON.stringify(secionIniciada));
    location.reload()
    }else{
        conteinerError.innerHTML = `<h4>las credenciales no corresponde a ningun usuario registrado, intentelo de nuevo</h4>`
    }
} 


function cerrarSecion (e){
    e.preventDefault()
    secionIniciada = false;
    localStorage.setItem('iniciado', JSON.stringify(secionIniciada));
    location.reload()
}


if(secionIniciada == true){
    conteinerLogin.setAttribute('class', 'none')
    conteinerSignoff.setAttribute('class','conteinerSignoff')
    liRegister.setAttribute('class','none')
}else{
    conteinerSignoff.setAttribute('class','none')
    conteinerLogin.setAttribute('class', 'conteinerLogin')
    liRegister.setAttribute('class','')
}
//ejecucion
