import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const storedItems = JSON.parse(localStorage.getItem('items')) || [];
      setItems(storedItems);
      setIsInitialized(true);
    } catch (error) {
      console.error('Error al cargar datos:', error);
      setItems([]);
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('items', JSON.stringify(items));
    }
  }, [items, isInitialized]);

  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      setItems(items.map(item => 
        item.id === itemToEdit.id ? { ...item, value } : item
      ));
      setItemToEdit(null);
    } else {
      setItems([...items, { id: Date.now(), value }]);
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (item) => {
    setItemToEdit(item);
  };

  return (
    <div className="main-bg">
      <h1 className="main-title">Evaluación de Alumnos</h1>
      <div className="card">
        <h2 className="card-title">Agregar Nueva Evaluación</h2>
        <Form 
          addOrUpdateItem={addOrUpdateItem} 
          itemToEdit={itemToEdit} 
        />
      </div>
      <div className="card">
        <h2 className="card-title">Evaluaciones Guardadas</h2>
        <List 
          items={items} 
          deleteItem={deleteItem} 
          editItem={editItem} 
        />
      </div>
    </div>
  );
}

export default App;

