export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input);
    }
}
const validadores = {
}
const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'customError'
]
const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo de nome não pode estar vazio.'
    },
    telefone: {
        valueMissing: 'O campo de telefone não pode estar vazio.',
        typeMismatch: 'O número digitado não é válido, o padrão de número esperado é (DD)XXXXX-XXXX.'
    },
    mensagem: {
        valueMissing: 'O campo de mensagem não pode estar vazio.',
    }
}
function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagemErro = ''
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagemErro = mensagensDeErro[tipoDeInput][erro]
        }
    })
    
    return mensagemErro;
}


