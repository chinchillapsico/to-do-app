
$(document).ready(function(){

  	$('#add').on('click', addTask); /*usamos el selector #add que al hacer click desencadena la función*/ 
    /* cuando se cambia el check desencadena la función completeTask*/
     /* cuando se hace click en el icono desencadena la función deleteTask*/
     
	function addTask(){

  		var  newToDo= $('#newtask').val(); /*creamos una variable que guarda el valor de la nueva tarea ingresada*/
    	$('#listTask').append('<li><p><input type = "checkbox" id="check" class = "completed">' + newToDo + '<i class="fa fa-trash fa-2x deleted"></i></</p>'); /* tenemos la lista "ul" como contenedor vacío 
                                                                                                             con el id #listTask, con el método append creamos un "li"
                                                                                                     que se agrega la final del elemento, este "li" contiene  el valor
                                                                                                     de la variable declarada recién */

    	$('#newtask').val("");/*luego de agregar el elemento deja vacío el campo otra vez.*/

  	}

  	$('#listTask').on('click', '.deleted', function(){
  		$(this).parent().remove();

  	});
  	
     $('#listTask').on('change', '.completed', function(){
  		$(this).parent().addClass('done'); /*añade la clase done*/
  	});


});  	


/*var contenedortask = 

function savetask(){

		var vacio = [];
		if (localStorage && contenedortask[0] != undefined){
			 vacio = []; /* en el vacío se guarda las nuevas tareas */
		/*	for (var i in contenedortask){ /*Se recorre con un for y se pone la última lista al arreglo de objetos (vacio) con la variable "agrega"*/
				/*var agrega = contenedortask[i];
				vacio.push({
					vacio :agrega.vacio, 
					id : agrega.id
				});

			}
			console.log(vacio); /*Las tareas agregadas se guardan por medio de localStorage. localStorage es  un método que guarda los datos de manera continúa y local
			 ( NO se elimina cuando la pestaña o ventana está cerrada, a diferencia de sessionStorage). Solo guarda cadenas de texto.*/

			/*localStorage["contenedortask"] = JSON.stringify(vacio);
			/*The JSON.stringify()  es un método que convierte un valor JavaScript a JSON string,  opcionalmente puede reemplazar valores si la función está especificada, o puede incluir sólo las propiedades especificadas de un array
			JSON.stringify(value[, replacer[, space]]) -----> value corresponde al valor que transformaremos en JSON string, replacer es opcional y space agrega un espacio a la
			cadena para que sea más legible. Si se omite no se pone espacio en blanco*/
		/*}*/
	/* } */