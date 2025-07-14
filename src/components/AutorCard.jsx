import axios from "axios"

function AutorCard({ autor, setAutorEditando, cargarAutores }) {
  const eliminar = async () => {
    if (window.confirm("¿Eliminar autor?")) {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/autores/${autor.id}`
      )
      cargarAutores()
    }
  }

  return (
    <div className="autor-card">
      <h3>{autor.nombre}</h3>
      <img
        src={`${import.meta.env.VITE_BACKEND_URL}${autor.imagenUrl}`}
        alt={autor.nombre}
      />
      <p>{autor.biografia}</p>
      <button onClick={() => setAutorEditando(autor)}>Editar</button>
      <button onClick={eliminar}>Eliminar</button>
    </div>
  )
}

export default AutorCard
