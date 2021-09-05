//let mensaje;
//if (login == 'Empleado') {
//mensaje = 'Hola';
//} else if (login == 'Director') {
//mensaje = 'Saludos';
//} else if (login == '') {
//mensaje = 'Sin inicio de sesión';
//} else {
//mensaje = '';
//}

let message;
const loginEmpleado = (login == 'Empleado') ? 'Hello' : '';
const loginDirector = (login == 'Director') ? 'Saludos' : '';
const loginVoid = (login == '') ? 'Sin inicio de sesión' : '';
