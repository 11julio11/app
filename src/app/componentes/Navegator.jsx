
import React from 'react'

const Navegator = () => {
  return (
    <div className="App">
      <h1>Tienda de Muebles</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={consulta.nombre}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={consulta.email}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Teléfono:
            <input
              type="tel"
              name="telefono"
              value={consulta.telefono}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Mensaje:
            <textarea
              name="mensaje"
              value={consulta.mensaje}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Enviar Consulta</button>
      </form>
    </div>
  );
}

export default Navegator
