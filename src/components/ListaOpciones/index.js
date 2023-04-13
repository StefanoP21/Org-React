import "./ListaOpciones.css";

const ListaOpciones = (props) => {
  // Método .map -> arreglo.map( (equipo, index) => {
  //   return <option></option>;
  // });
  const equipos = [
    "Programación",
    "Front End",
    "Data Science",
    "DevOps",
    "Ux y Diseño",
    "Móvil",
    "Innovación y Gestión",
  ];

  const manejarCambio = (e) => {
    console.log("cambio", e.target.value);
    props.actualizarValor(e.target.value);
  };

  return (
    <div className="lista-opciones">
      <label>Equipo</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo
        </option>
        {/* {equipos.map((equipo, index) => {
          return <option key={index}>{equipo}</option>;
        })} */}
        {equipos.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
