import { useState } from 'react'
import './App.css'

function App() {
  const [contador, setcontador] = useState(0)
  const [encendido, setEncendido] = useState(false)
  const Incrementar = () => {
    setcontador(contador + 1)
  }
  const Decrementar = () => {
    setcontador(contador - 1)
  }
  const Resetear = () => {
    setcontador(0)
  }
  const Toggle = () => {
    setEncendido(!encendido)
  }

  return (
    <>
      <div
        style={{
          textAlign: 'center',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          background: encendido ? '#222' : '#fff', // Fondo negro si está encendido
          color: encendido ? '#fff' : '#000',      // Texto blanco si está encendido
          transition: 'background 0.3s, color 0.3s'
        }}
      >
        <h2>Contador</h2>
        <h3 style={{fontSize: '2.5rem',marginBottom: '10px 0'}}>{contador}</h3>
        <button onClick={Incrementar}>Incrementar</button>
        <button onClick={Decrementar}>Decrementar</button>
        <button onClick={Resetear}>Resetear</button>
        <button onClick={Toggle}>
          {encendido ? 'Apagar' : 'Encender'}
        </button>
      </div>
    </>
  )
}

export default App
