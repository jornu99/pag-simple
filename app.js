// import {  } from "./js/login";

import { Persona } from "./js/login"

const user = 'user@gmail.com'
const password = 'admin123'
let msg = ''
const persona = new Persona()

function entrar() {
    let usuario = document.getElementById('user').value
    let pwd = document.getElementById('password').value

    if (usuario == user && password == pwd) {
        window.location.href = './html/datos.html'
    } else {
        msg += 'Algún dato es incorrecto'
        alert(msg)
    }
}

function validarCorreo() {
    let correo = document.getElementById('correo').value
    let salir = false

    correo.charAt(0)
    // var dd = correo.split('@')

    if (!correo.includes('@')) {
        msg += 'No contiene @ el correo'
    }
    if (correo.charAt(0) == '@') {
        msg += '\nNo puede empezar por @'
    }
    for (let i = correo.length - 4; i < correo.length - 1 && !salir; i++) {
        if (correo.charAt(i) == '@') {
            msg += '\nNo puede haber @ en la parte final'
            salir = true
        }
    }

    return msg
}

function validarContraseña() {
    let pwd = document.getElementById('password').value

    if (pwd.length < 8) {
        msg += '\nLa contraseña debe tener 8 carácteres'
    }

    return msg
}

function mensajeError(campo, min, max, msg) {
    if (campo.length < min) {
        msg += 'Tiene menos de ', min, ' caracteres ', campo
    } else {
        if (campo.length > max) {
            msg += 'Tiene más de ', max, ' caracteres ', campo
        }
    }
}

function limpiar() {
    document.getElementById('nombre').value = ''
    document.getElementById('apellido').value = ''
    document.getElementById('apellido2').value = ''
    document.getElementById('correo').value = ''
    document.getElementById('dni').value = ''
}

function guardar() {
    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value
    let apellido2 = document.getElementById('apellido2').value
    let dni = document.getElementById('dni').value
    let fecha = document.getElementById('fecha').value

    validarNombre(nombre)
    validarApellido(apellido, apellido2)
    validarDNI(dni)
    validarFecha(fecha)
}

function validarNombre(nombre) {
    if (nombre.length > 3 && nombre.length < 30) {
        persona.nombre = nombre
    } else {
        msg += '\nNombre debe tener entre 3 y 30 carácteres'
    }
}

function validarApellido(apellido, apellido2) {
    if (apellido.length > 2 && apellido.length < 30) {
        persona.apellido = apellido
    } else {
        msg += '\nPrimer apellido debe tener entre 2 y 30 carácteres'
    }

    if (apellido2.length > 2 && apellido2.length < 30) {
        persona.apellido2 = apellido2
    } else {
        msg += '\nSegundo apellido debe tener entre 2 y 30 carácteres'
    }
}

function validarDNI(dni) {
    let nums
    let letra
    let letras = 'TRWAGMYFPDXBNJZSQVHLCKE'
    let expresion_dni = /^\d{8}[a-zA-Z]$/

    if (dni.length == 9 && expresion_dni.test(dni)) {
        nums = dni.substr(0, dni.length - 1);
        letra = dni.substr(dni.length - 1, 1);
        letras = letras.substring(nums, nums + 1);

        if (letras != letra.toUpperCase()) {
            confirm('DNI correcto')
        } else {
            alert('Letra de DNI errónea');
        }
    } else {
        alert('Error en el DNI');
    }
}

function validarFecha(fecha) {
    if (fecha.charAt(3) != '/' || fecha.charAt(5) != '/' || fecha.length > 10) {
        persona.fecha = fecha
    } else {
        msg += 'Formato de fecha erróneo (dd/mm/yyyy'
    }
}

function mostrar() {
    console.log(p)
}