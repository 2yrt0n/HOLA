const nombre = document.getElementById("name")
form.addEventListener("submit", e => {
    e.preventDefault()
    if (nombre.Value.length < 6) {
        alert("Nombre corto pá")
        entrar = true
    }
})