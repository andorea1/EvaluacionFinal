var imagenes=document.querySelectorAll('#caja-img');
zonaDestino1=document.getElementById('caja1');  
zonaDestino2=document.getElementById('caja2'); 
zonaDestino3=document.getElementById('caja3'); 

function iniciar(){
    for(var i=0; i<imagenes.length; i++){
    imagenes[i].addEventListener('dragstart', arrastrado);
    imagenes[i].addEventListener('dragend', finalizado);
    }

    zonaDestino1.addEventListener('dragenter', function(e){
    e.preventDefault(); });
    zonaDestino1.addEventListener('dragover', function(e){
    e.preventDefault(); });
    zonaDestino1.addEventListener('drop', soltado1);

    zonaDestino2.addEventListener('dragenter', function(e){
    e.preventDefault(); });
    zonaDestino2.addEventListener('dragover', function(e){
    e.preventDefault(); });
    zonaDestino2.addEventListener('drop', soltado2);


    zonaDestino3.addEventListener('dragenter', function(e){
    e.preventDefault(); });
    zonaDestino3.addEventListener('dragover', function(e){
    e.preventDefault(); });
    zonaDestino3.addEventListener('drop', soltado3);

}


function arrastrado(e){
    elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

function finalizado(e){
    elemento=e.target;
    elemento.style.display = "none";
} 

function soltado1(e){
    e.preventDefault();
   var id=e.dataTransfer.getData('Text');
   var src=document.getElementById(id).src;
   zonaDestino1.innerHTML='<img src="'+src+'"height="400px" width="275px">';
}

function soltado2(e){
    e.preventDefault();
    var id=e.dataTransfer.getData('Text');
    var src=document.getElementById(id).src;
    zonaDestino2.innerHTML='<img src="'+src+'"height="400px" width="275px">';
}

function soltado3(e){
    e.preventDefault();
    var id=e.dataTransfer.getData('Text');
    var src=document.getElementById(id).src;
    zonaDestino3.innerHTML='<img src="'+src+'"height="400px" width="275px">';
}

function reiniciar() {
    window.location.reload();
}

iniciar()


