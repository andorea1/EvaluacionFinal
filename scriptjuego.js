var imagenes=document.querySelectorAll('#caja-img img');
zonaDestino1=document.getElementById('caja1');  
zonaDestino2=document.getElementById('caja2'); 
zonaDestino3=document.getElementById('caja3'); 

function iniciar(){
    for(var i=0; i<imagenes.length; i++){
    imagenes[i].addEventListener('dragstart', arrastrado, false);
    imagenes[i].addEventListener('dragend', finalizado, false);
    }

    zonaDestino1.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    zonaDestino1.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    zonaDestino1.addEventListener('drop', soltado, false);

    zonaDestino2.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    zonaDestino2.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    zonaDestino2.addEventListener('drop', soltado2, false);


    zonaDestino3.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    zonaDestino3.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    zonaDestino3.addEventListener('drop', soltado3, false);

}


function arrastrado(e){
    elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

function finalizado(e){
    elemento=e.target;
    elemento.style.display = "none";
} 

function soltado(e){
    e.preventDefault();
   var id=e.dataTransfer.getData('Text');
    if(id!="imagen4"){
    var src=document.getElementById(id).src;
    zonaDestino1.innerHTML='<img src="'+src+'"height="400px" width="275px">';
    }else{
    zonaDestino1.innerHTML='la imagen no es admitida';
    }
}

function soltado2(e){
    e.preventDefault();
    var id=e.dataTransfer.getData('Text');
    if(id!="imagen4"){
        var src=document.getElementById(id).src;
    zonaDestino2.innerHTML='<img src="'+src+'"height="400px" width="275px">';
    }else{
    zonaDestino2.innerHTML='la imagen no es admitida';
    }
}
function soltado3(e){
    e.preventDefault();
    var id=e.dataTransfer.getData('Text');
    if(id!="imagen4"){
        var src=document.getElementById(id).src;
    zonaDestino3.innerHTML='<img src="'+src+'"height="400px" width="275px">';
    }else{
    zonaDestino3.innerHTML='la imagen no es admitida';
    }
}

function reiniciar() {
    window.location.reload();
}

iniciar()


