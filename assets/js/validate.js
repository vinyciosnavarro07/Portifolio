const form   = document.getElementById('formulario');
const campos = document.querySelectorAll('.required');
const spans  = document.querySelectorAll('.span__required');
const emailRegex = /\w+@\w+\.+[a-z]/;
const nada = '';

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    nomeValidacao();
    emailValidacao();
    assuntoValidacao();
    mensagemValidacao();
})

function aviso() {
    if(campos[0,1,2,3].value == '') 
    {
        alert("Preencha os campos requisitados por favor")
    }

    else
    {
        alert('Formulário enviado!')
    }
}

function setError(index){
    campos[index].style.border = '3px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nomeValidacao(){
    if(campos[0].value.length == 0) 
    {
        setError(0);

    }

    else
    {
        removeError(0);

    }
}

function emailValidacao(){
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
}

function assuntoValidacao(){
    if(campos[2].value == 0) 
    {
        setError(2);
    }
    else
    {
        removeError(2);
    }
}

function mensagemValidacao(){
    if(campos[3].value == 0) 
    {
        setError(3);
    }
    else
    {
        removeError(3);
    }
}
