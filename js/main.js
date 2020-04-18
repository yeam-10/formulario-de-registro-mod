const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("passw")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener('submit', e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ //tomada de w3resourse
    parrafo.innerHTML = "" // reinicia los valores
    if (nombre.value.length < 6) {
        warnings += 'Nombre no valido <br>'
        entrar = true
    }
    console.log(regexEmail.test(email.value))

    if (!regexEmail.test(email.value)) {
        warnings += 'email no valido <br>'
        entrar = true
    }

    if (pass.value.length < 8) {

        warnings += 'contraseña no valida <br>'
        entrar = true
    }

    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = 'enviado'
    }
})