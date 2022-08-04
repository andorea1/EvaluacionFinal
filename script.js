//Reproductor de video//
let botonInicio = document.querySelector("#iniciar");
let botonFin = document.querySelector("#pausar");
let video = document.querySelector("video")

botonInicio.addEventListener('click', ()=>{
    video.play()
});

botonFin.addEventListener('click',()=>{
    video.pause()
});


