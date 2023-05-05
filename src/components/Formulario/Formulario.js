import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones/";
import Boton from "../Boton";

const Formulario = (props) => {
    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    const { registrarColaborador, crearEquipo } = props;

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Manejar el envío");
        const datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo,
        };
        registrarColaborador(datosAEnviar);
    };

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({ titulo, colorPrimario: color }); // titulo: titulo, color: color
    };

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Completa el formulario para crear el colaborador</h2>
                <Campo
                    titulo="Nombre"
                    placeholder="Ingresar nombre"
                    required={true}
                    valor={nombre}
                    actualizarValor={actualizarNombre}
                />
                <Campo
                    titulo="Puesto"
                    placeholder="Ingresar puesto"
                    required={true}
                    valor={puesto}
                    actualizarValor={actualizarPuesto}
                />
                <Campo
                    titulo="Foto"
                    placeholder="Ingresar enlace de foto"
                    required
                    valor={foto}
                    actualizarValor={actualizarFoto}
                />
                <ListaOpciones
                    valor={equipo}
                    actualizarValor={actualizarEquipo}
                    equipos={props.equipos}
                />
                {/* <Boton texto="Crear" /> */}
                <Boton>Crear</Boton>
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Completa el formulario para crear el equipo</h2>
                <Campo
                    titulo="Título"
                    placeholder="Ingresar título"
                    required={true}
                    valor={titulo}
                    actualizarValor={actualizarTitulo}
                />
                <Campo
                    titulo="Color"
                    placeholder="Ingresar el color en Hex"
                    required={true}
                    valor={color}
                    actualizarValor={actualizarColor}
                    type="color"
                />
                <Boton>Registar equipo</Boton>
            </form>
        </section>
    );
};

export default Formulario;
