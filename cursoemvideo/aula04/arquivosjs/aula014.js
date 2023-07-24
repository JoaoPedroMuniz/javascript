var hora = document.getElementById('hora');

var agora = new Date()

var horario = agora.getHours()

var img = document.querySelector('#imagem img');

var imgManha = "https://images.pexels.com/photos/4913366/pexels-photo-4913366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

var imgTarde = "https://images.pexels.com/photos/763232/pexels-photo-763232.jpeg"

var imgNoite = "https://images.pexels.com/photos/771883/pexels-photo-771883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

var imgMadrugada = "https://images.pexels.com/photos/11450874/pexels-photo-11450874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

hora.innerHTML = `Agora são ${horario} horas`
if (horario >= 6 && horario < 12){
    document.body.style.backgroundColor = 'khaki'
    img.src = imgManha;
} 

else if (horario >= 12 && horario < 18){
    document.body.style.backgroundColor = 'darkyellow';
    img.src = imgTarde;
} 

else if( horario >= 18 && horario < 23.59){
    document.body.style.backgroundColor = 'rgb(50, 50, 102)';
    img.src = imgNoite
} 

else {
    document.body.style.backgroundColor = 'rgba(9, 9, 49)'
    img.src = imgMadrugada
}