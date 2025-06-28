import React, { useState, useEffect, useRef } from 'react';

// Componente Form que recibe funciones y datos como props
function Form({ addOrUpdateItem, itemToEdit }) {
  // Estado local para el valor del input
const [nombre, setNombre] = useState('');
const [asignatura, setAsignatura] = useState('');
const [promedio, setPromedio] = useState('');
const nombreRef = useRef(null);

  // Efecto para actualizar el input si se va a editar un ítem
useEffect(() => {
    if (itemToEdit) {
      // Suponiendo que value es un objeto con los tres campos
      setNombre(itemToEdit.value?.nombre || '');
      setAsignatura(itemToEdit.value?.asignatura || '');
      setPromedio(itemToEdit.value?.promedio || '');
    } else {
      setNombre('');
      setAsignatura('');
      setPromedio('');
    }
    nombreRef.current && nombreRef.current.focus();
}, [itemToEdit]);

  // Maneja el envío del formulario
const handleSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del form
    if (nombre.trim() && asignatura.trim() && promedio.trim()) { // Solo si el input no está vacío
      addOrUpdateItem({ nombre, asignatura, promedio }); // Llama a la función para agregar o actualizar
      setNombre('');
      setAsignatura('');
      setPromedio('');
    }
};

return (
    <form className="form-eval" onSubmit={handleSubmit}>
      <input
        ref={nombreRef}
        type="text"
        placeholder="Ej: Andres Navarro"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ej: Bases de datos"
        value={asignatura}
        onChange={e => setAsignatura(e.target.value)}
      />
      <input
        type="number"
        step="0.1"
        min="0"
        max="7"
        placeholder="Ej: 5.0"
        value={promedio}
        onChange={e => setPromedio(e.target.value)}
      />
      <button type="submit">
        {itemToEdit ? 'Actualizar Evaluación' : 'Agregar Evaluación'}
      </button>
    </form>
);
}

export default Form;
