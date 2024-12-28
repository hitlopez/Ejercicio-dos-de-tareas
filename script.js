const btnAdd = document.getElementById('btn_add');
let descripcion = document.getElementById('descripcion');
let listTask = document.getElementById('listTask');

btnAdd.addEventListener('click', agregar); // Corrección 1

function agregar() {
    let task = descripcion.value;

    if (task.trim() === "") { // Corrección 3: Evitar agregar tareas vacías
        alert("Por favor, ingresa una tarea.");
        return; // Sale de la función si el campo está vacío
    }

    let li = document.createElement('li'); // Corrección 2: Crear elementos dinámicamente
    li.textContent = task;

    let btnEdit = document.createElement('button');
    btnEdit.textContent = "Editar";
    btnEdit.classList.add("btnEdit");

    let btnRemove = document.createElement('button');
    btnRemove.textContent = "Eliminar";
    btnRemove.classList.add("btnRemove");

    li.appendChild(btnEdit); // Agregar botones al li
    li.appendChild(btnRemove);

    listTask.appendChild(li); // Agregar el li a la lista

    descripcion.value = ""; // Limpiar el input después de agregar la tarea
}

// Eventos para editar y eliminar (se agregan fuera de la función agregar)
listTask.addEventListener('click', (event) => {
    if (event.target.classList.contains('btnRemove')) {
        event.target.parentElement.remove();
    } else if (event.target.classList.contains('btnEdit')) {
        let li = event.target.parentElement;
        let taskText = li.firstChild.textContent; // Obtener el texto de la tarea
        descripcion.value = taskText; // Colocar el texto en el input
        li.remove(); // Eliminar el elemento de la lista para editarlo
    }
});