//variables

//selectores
const enviarFormulario = document.querySelector('#enviarRegistro')
const conteinerDiv = document.querySelector('.errorRegister')
//listener
enviarFormulario.addEventListener('click',obtenerDatosDeRegistro)

//fuciones
function registro(nombre,apellido,email,emailConfirm,password,passwordConfirm){
    this.nombre = nombre;
    this.apellido =apellido;
    this.email = email;
    this.emailConfirm = emailConfirm;
    this.password = password;
    this.passwordConfirm = passwordConfirm;
}


function obtenerDatosDeRegistro (e) {
e.preventDefault();
const nombre = document.querySelector('#nombre').value
const apellido = document.querySelector('#apellido').value
const email = document.querySelector('#email').value
const emailConfirm = document.querySelector('#emailConfirm').value
let password = document.querySelector('#password').value
const passwordConfirm = document.querySelector('#passwordConfirm').value


//verificar si la contraseña es mayor a 8 caracteres
if(password.length > 8 && passwordConfirm.length > 8){
//verificar si las confirmaciones de datos son iguales
if(email === emailConfirm && password === passwordConfirm){
    const nuevoUsuario = new registro(nombre,apellido,email,emailConfirm,password,passwordConfirm);
    localStorage.setItem('nuevoUsuario', JSON.stringify(nuevoUsuario))
    location.href="iniciar_secion.html"
}else{
    if(email != emailConfirm){
        const errorEmail = ()=>{
    Swal.fire(
        'Error al comprobar los datos',
        'Las correos no son igueles, intentelo de nuevo',
        'error'
    ) 
    }
    errorEmail()
    }else{
        const errorPassword = ()=>{
            Swal.fire(
                'Error al comprobar los datos',
                'Las contraseñas no son igueles, intentelo de nuevo',
                'error'
            )
        }
        errorPassword()
    }
    
}
}else{
    conteinerDiv.innerHTML = `<h4>la contraseña es muy corta</h4>`
}   
}
//ejecucion
