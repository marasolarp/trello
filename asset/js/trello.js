//var boton=document.getElementById('btn_principal');
 function creandoLista(){
	var btnTarea=document.getElementById('btn_tarea');
	var btnPrincipal=document.getElementById('btn_principal');
btnPrincipal.style.display= 'none';

	//crear input y darle atributos 
	var input=document.createElement('input');
	input.setAttribute('type', 'text');// sera tipo texto
	input.setAttribute('placeholder', 'Título');//escribo el placeholder
	input.classList.add('class', 'input-titulo');//agrego clase a mi input para luego darle estilos en css
	input.value;//rescato el valor agregado por el usuario

	//creare mi boton
	var botonGuardar= document.createElement('button');//creo boton 
	var textoBoton=document.createTextNode('Guardar');//creo un texto nodo para lo que escriba el usuario 
	botonGuardar.setAttribute('type','button');
	botonGuardar.classList.add('class','btn_guardar');
	//agregar padres
	tareas.appendChild(input);
	tareas.appendChild(botonGuardar);
	botonGuardar.appendChild(textoBoton);

	botonGuardar.addEventListener('click',function() {
	var tarea=document.getElementsByClassName('input-titulo')[0].value;
	document.getElementsByClassName('input-titulo')[0].value = '';
	btnPrincipal.style.display='inline-block';
	console.log(tarea);
	});
};