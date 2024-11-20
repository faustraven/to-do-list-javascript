/* Consigna
-Crear una sencilla lista de tareas(to-do-list) en HTML que incluya 
un campo de texto de entrada y un botón de "Agregar tarea".
-Cuando el usuario introduzca una tarea y presione en el botón, ésta 
debera añadirse a una lista de tareas que en un principio deberá estar
vacía.
-Cada tarea en la lista deberá estar acompañada por un botón "Eliminar"
a su lado.
-Al hacer click en dicho botón, la tarea correspondiente deberá ser 
eliminada de la lista.

Pistas y Sugerencias
-Utilizar JavaScript como lenguaje de programación para el desarrollo.
-Investigar sobre diferentes métodos del DOM que puedan ser utilizados
para este desarrollo.
-Intentar mejorar un poco el diseño poniendo en práctica conceptos 
básicos de CSS. */


function agregarTarea() {

    //Obtenemos el valor del campo de la tarea
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

    //Validamos que el valor no sea vacío
    if (nuevaTareaTexto === "") {
        alert("Por favor, Ingrese una tarea");
        return;
    }

    //Creamos elemento en la lista
    let nuevaTarea = document.createElement("li");

    nuevaTarea.textContent = nuevaTareaTexto + " ";

    // Crear boton de Eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function() { nuevaTarea.remove(); }

    //Agregar boton de eliminar al elemento de la lista
    nuevaTarea.appendChild(botonEliminar);

    //Agregar el elemento/la tarea a la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    //Limpiar el cuadro de texto del nombre de la tarea
    document.getElementById("nuevaTarea").value = "";

}