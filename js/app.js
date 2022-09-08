import { valida } from './main.js'

const inputs = document.querySelectorAll('.input')

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})