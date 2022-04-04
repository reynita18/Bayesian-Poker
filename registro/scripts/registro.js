



const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const edad = document.getElementById('edad');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const toggle = document.getElementById('toggle');

var datos = [];



form.addEventListener('submit', e => {
	e.preventDefault();
	
	revisar();
});

function revisar() {
	const usuarioValue = usuario.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	const edadValue = edad.value.trim();
	const nombreValue = nombre.value.trim();
	const apellidoValue = apellido.value.trim();



	if(nombreValue === ''){
		Errorde(nombre,'Nombre requerido')
	}else if(nombreValue.match(/[0-9]+|[\#\*\_\.\@\$\^\%\&\(/)]+/)){
		Errorde(nombre,"Caracteres Invalidos");
	}
	else{
		correcto(nombre);
		datos[0] = nombreValue.toString();
		datos.join();
		console.log(datos[0]);
		
	}

	if(apellidoValue === ''){
		Errorde(apellido,'Apellido requerido')
	}else if(apellidoValue.match(/[0-9]+|[\#\*\_\.\@\$\^\%\&\(/)]+/)){
		Errorde(apellido,"Caracteres Invalidos");
	}
	else{
		correcto(apellido);
		datos[0] = apellidoValue.toString();
		datos.join();
		console.log(datos[0]);
		
	}


	if(edadValue === ''){
		Errorde(edad,'Edad requerida');
	}else{
		correcto(edad);
		datos[1] = edadValue.toString();
		datos.join();
		console.log(datos[1]);
		

	}

	if(usuarioValue === '') {
		Errorde(username, 'Nombre de usuario no debe estar vacio');
	} else if(usuarioValue.length < 5){
		Errorde(username, 'Debe contener almenos 5 caracteres');

	} 
	else {
		correcto(username);
		datos[3] = usuarioValue.toString();
		datos.join();
		console.log(datos[3]);
		

	}
	
	if(emailValue === '') {
		Errorde(email, 'Email no debe estar vacio');
	} else if (!confEmail(emailValue)) {
		Errorde(email, 'No es un Email Valido');
	} else {
		correcto(email);
		datos[2] = emailValue.toString();
		datos.join();
		console.log(datos[2]);
		
		

	}
	
	if(passwordValue === '') {
		Errorde(password, 'Contraseña no es valida');
	}else if(!passwordValue.match(/[a-z]+/)){

		Errorde(password, 'Debe de tener minusculas');
	}else if(!passwordValue.match(/[A-Z]+/)){

		Errorde(password, 'Debe de tener mayusculas ');
	}
	else if(!passwordValue.match(/[\#\*\_\.\@\$\^\%\&\(/)]+/)){

		Errorde(password, 'Debe de contener al menos un caracter especial');
	}
	else if(!passwordValue.match(/[0-9]+/)){

		Errorde(password, 'Almenos un numero');
	}else if(passwordValue.length < 8){

		Errorde(password, 'Debe contener almenos 8 caracteres');
	}
	else {
		correcto(password);
		datos[4] = passwordValue.toString();
		datos.join();
		console.log(datos[4]);
		

		
	}

	
	if(password2Value === '') {
		Errorde(password2, 'Validacion de contraseña no debe estar vacia');
	} else if(passwordValue !== password2Value) {
		Errorde(password2, 'Las contraseñas no coinciden');
	} else{
		correcto(password2);
		

		
	}
	let contracri = encriptar(passwordValue);
		datos[5] = contracri.toString();
		datos.join();
		console.log(datos[5]);
	let contradesen = desencriptar(contracri);
		datos[6] = contradesen.toString();
		datos.join();
		console.log(datos[6]);



}

function Errorde(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function correcto(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function confEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}





function encriptar(password)
{
var key= 'abc123XYZ';

	var encrypted = CryptoJS.AES.encrypt(password, key);  
	console.log(encrypted.toString());

	return encrypted.toString()
}


function desencriptar(password)
{
var key= 'abc123XYZ';

	var decrypted = CryptoJS.AES.decrypt(password, key);
	console.log(decrypted.toString(CryptoJS.enc.Utf8));

	return decrypted.toString(CryptoJS.enc.Utf8)
}

//U2FsdGVkX1+VzEhW121O4uic0L0BfJiQlRdqE+tr67Q=


function MostrarContra()
{
	if(password.type === 'password'){
		password.setAttribute('type', 'text');
		toggle.classList.add('hide')
	}
	else
	{
		password.setAttribute('type', 'password');
		toggle.classList.add('hide')
	}
}

function MostrarContra2()
{
	if(password2.type === 'password'){
		password2.setAttribute('type', 'text');
		toggle.classList.add('hide')
	}
	else
	{
		password2.setAttribute('type', 'password');
		toggle.classList.add('hide')
	}
}



function BorrarTodo(){

	let confirmar = confirm("Estas seguro de efectuar esta accion?")
	if (confirmar)
	{	
		window.location.reload("Refresh");

		alert("Accion efectuada");
	}
	else{
		alert("Accion Cancelada");
	}
}