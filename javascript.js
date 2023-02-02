function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var frase = document.getElementById('dia')
    var n1 = document.getElementById('txtn1').value;
    n1 = n1.toUpperCase();
    
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#FEFEF3'
        frase.innerHTML = 'BOM DIA, ' + n1
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#FE6403'
        frase.innerHTML = 'BOA TARDE, ' + n1
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#0B434C'
        frase.innerHTML = 'BOA NOITE, ' + n1
    }
}
