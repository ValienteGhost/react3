import React, { useState, useEffect } from 'react';

// Componente Form que recibe funciones y datos como props
function Form({ addOrUpdateItem, itemToEdit }) {
  // Estado local para el valor del input
const [inputValue, setInputValue] = useState('');

  // Efecto para actualizar el input si se va a editar un ítem
useEffect(() => {
    if (itemToEdit) {
      setInputValue(itemToEdit.value); // Si hay ítem a editar, poner su valor en el input
    } else {
      setInputValue(''); // Si no, limpiar el input
    }
}, [itemToEdit]);

  // Maneja el envío del formulario
const handleSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del form
    if (inputValue.trim()) { // Solo si el input no está vacío
      addOrUpdateItem(inputValue); // Llama a la función para agregar o actualizar
      setInputValue(''); // Limpia el input después de enviar
    }
};

return (
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Actualiza el estado al escribir
    />
    <button type="submit">
        {itemToEdit ? 'Actualizar' : 'Agregar'} {/* Cambia el texto según la acción */}
    </button>
    </form>
);
}

export default Form;
