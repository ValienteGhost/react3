import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {
  // Estado para almacenar los ítems de la lista
  const [items, setItems] = useState([]);
  // Estado para almacenar el ítem que se va a editar
  const [itemToEdit, setItemToEdit] = useState(null);

  // Al montar el componente, cargar los ítems desde localStorage
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  // Cada vez que cambian los ítems, guardarlos en localStorage
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  // Función para agregar un nuevo ítem o actualizar uno existente
  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      // Si hay un ítem para editar, actualizarlo
      setItems(items.map(item => 
        item.id === itemToEdit.id ? { ...item, value } : item
      ));
      setItemToEdit(null);
    } else {
      // Si no, agregar uno nuevo
      setItems([...items, { id: Date.now(), value }]);
    }
  };

  // Función para eliminar un ítem por su id
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Función para seleccionar un ítem para editar
  const editItem = (item) => {
    setItemToEdit(item);
  };

  return (
    <div className="App">
      <h1>CRUD con LocalStorage</h1>
      {/* Componente del formulario para agregar o editar ítems */}
      <Form 
        addOrUpdateItem={addOrUpdateItem} 
        itemToEdit={itemToEdit} 
      />
      {/* Componente de la lista para mostrar, editar y eliminar ítems */}
      <List 
        items={items} 
        deleteItem={deleteItem} 
        editItem={editItem} 
      />
    </div>
  );
}

export default App;

