function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12){
    //BOM DIA
    img.src = 'manha.png'
    document.body.style.background = '#F0E68C'
}else if(hora >= 12 && hora <= 18){
    //BOA TARDE
    img.src = 'tarde.png'
    document.body.style.background = '#FF8C00'
}else{
    //BOA NOITE
    img.src = 'noite.png'
}
}