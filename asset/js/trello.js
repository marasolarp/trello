//var boton=document.getElementById('btn_principal');
 function creandoLista(){
	var btnTarea=document.getElementById('btn_tarea');
	var btnPrincipal=document.getElementById('btn_principal');
	btnPrincipal.style.display= 'none';
	//crear input y darle atributos 
	var input=document.createElement('input');
	input.setAttribute('type', 'text');// sera tipo texto
	input.setAttribute('placeholder', 'Añadir Tarjeta...');//escribo el placeholder
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
	
	//crear un nuevo div y añadir un contenido del usuario
	var newDiv=document.createElement('div');
	var nuevoParrafo = document.createElement('h4'); //creando parrafo
    var nodoText = document.createTextNode(tarea);// le estamos diciendo al comentario que es un nodo de texto.
    //agredando a los padres
    nuevoParrafo.appendChild(nodoText);
	newDiv.appendChild(nuevoParrafo);
	tareas.appendChild(newDiv);
	
	//crear boton añadir
	/*var BotonAñadir=document.createElement('button');
	var añadirTexto=document.createTextNode('Añadir');
	BotonAñadir.setAttribute('type','button');
	BotonAñadir.classList.add('id', 'btn_añadir');
	//agregar padres
	BotonAñadir.appendChild(añadirTexto);
	tareas.appendChild(BotonAñadir);*/
	
	//creando a para el titulo de la lista
	var add=document.createElement('a');
	add.setAttribute('href','#');//crear un atributo de add
	var textoAdd=document.createTextNode('Añadir Tarjeta');
	add.appendChild(textoAdd);	
	tareas.appendChild(add);
	add.style.display='inline';

	//creando textarea
	add.addEventListener('click', function(){
	var textarea=document.createElement('textarea');
	var add=document.createElement('a');
	add.setAttribute('href','#');//crear un atributo de add
	textarea.setAttribute('class', 'tarjeta');
	var textAdd=document.createTextNode('Añadir tarjeta');
	add.appendChild(textAdd);
	tareas.appendChild(textarea);
	tareas.appendChild(add); 
	console.log(tarea);

	//crear boton añadir
	var BotonAñadir=document.createElement('button');
	var añadirTexto=document.createTextNode('Añadir');
	BotonAñadir.setAttribute('type','button');
	BotonAñadir.classList.add('id', 'btn_añadir');
	//agregar padres
	BotonAñadir.appendChild(añadirTexto);
	tareas.appendChild(BotonAñadir);
	BotonAñadir.addEventListener('click', function(){
		var segundaTarjeta=document.getElementsByClassName('btn_guardar');
		//rescatando el valor de textarea
		var textareaValue=document.getElementsByClassName('tarjeta')[0].value;
		document.getElementsByClassName('tarjeta')[0].value='';
		var textSpan=document.createTextNode(textareaValue);

		//creando div para almacenar independiente al span
		var contenedorSolo=document.createElement('div');
		contenedorSolo.setAttribute('class', 'solo');
		var textoSolo=document.createElement('p');
		textoSolo.appendChild(textSpan);
		contenedorSolo.appendChild(textoSolo);
		segundaTarjeta.appendChild(contenedorSolo);

	})
	});
});


};