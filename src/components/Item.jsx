import React from 'react';

// Componente que representa un solo ítem de la lista
function Item({ item, deleteItem, editItem }) {
    return (
        <li>
            {/* Muestra el valor del ítem */}
            {item.value}
            {/* Botón para editar el ítem */}
            <button onClick={() => editItem(item)}>Editar</button>
            {/* Botón para eliminar el ítem */}
            <button onClick={() => deleteItem(item.id)}>Eliminar</button>
        </li>
    );
}

export default Item;