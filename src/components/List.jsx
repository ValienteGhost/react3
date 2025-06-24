import React from 'react';
import Item from './Item';

// Componente que muestra la lista de ítems
function List({ items, deleteItem, editItem }) {
return (
    <ul>
      {/* Recorre el array de ítems y renderiza un componente Item por cada uno */}
    {items.map((item) => (
        <Item
          key={item.id} // Clave única para cada ítem
          item={item} // Pasa el ítem como prop
          deleteItem={deleteItem} // Función para eliminar
          editItem={editItem} // Función para editar
        />
    ))}
    </ul>
);
}

export default List;
