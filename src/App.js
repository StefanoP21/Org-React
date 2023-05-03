import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./components/Header/Header";
import Formulario from "./components/Formulario/Formulario";
import MiOrg from "./components/MiOrg";
import Equipo from "./components/Equipo";
import Colaborador from "./components/Colaborador";
import Footer from "./components/Footer";

function App() {
    const [mostrarFormulario, actualizarMostrar] = useState(false);
    const [colaboradores, actualizarColaboradores] = useState([
        {
            id: uuidv4(),
            equipo: "Front End",
            foto: "https://github.com/harlandlohora.png",
            nombre: "Harland Lohora",
            puesto: "Instructor",
        },
        {
            id: uuidv4(),
            equipo: "Programación",
            foto: "https://github.com/genesysaluralatam.png",
            nombre: "Genesys Rondón",
            puesto: "Desarrolladora de software e instructora",
        },
        {
            id: uuidv4(),
            equipo: "UX y Diseño",
            foto: "https://github.com/JeanmarieAluraLatam.png",
            nombre: "Jeanmarie Quijada",
            puesto: "Instructora en Alura Latam",
        },
        {
            id: uuidv4(),
            equipo: "Programación",
            foto: "https://github.com/christianpva.png",
            nombre: "Christian Velasco",
            puesto: "Head de Alura e Instructor",
        },
        {
            id: uuidv4(),
            equipo: "Innovación y Gestión",
            foto: "https://github.com/JoseDarioGonzalezCha.png",
            nombre: "Jose Gonzalez",
            puesto: "Dev FullStack",
        },
    ]);

    // Lista de Equipos
    const [equipos, actualizarEquipos] = useState([
        {
            id: uuidv4(),
            titulo: "Programación",
            colorPrimario: "#57C278",
            colorSecundario: "#D9F7E9",
        },
        {
            id: uuidv4(),
            titulo: "Front End",
            colorPrimario: "#82CFFA",
            colorSecundario: "#E8F8FF",
        },
        {
            id: uuidv4(),
            titulo: "Data Science",
            colorPrimario: "#A6D157",
            colorSecundario: "#F0F8E2",
        },
        {
            id: uuidv4(),
            titulo: "DevOps",
            colorPrimario: "#E06B69",
            colorSecundario: "#FDE7E8",
        },
        {
            id: uuidv4(),
            titulo: "UX y Diseño",
            colorPrimario: "#DB6EBF",
            colorSecundario: "#FAE9F5",
        },
        {
            id: uuidv4(),
            titulo: "Móvil",
            colorPrimario: "#FFBA05",
            colorSecundario: "#FFF5D9",
        },
        {
            id: uuidv4(),
            titulo: "Innovación y Gestión",
            colorPrimario: "#FF8A29",
            colorSecundario: "#FFEEDF",
        },
    ]);

    // Ternario --> condición ? seMuestra : noSeMuestra
    // condición && seMuestra

    const cambiarMostrar = () => {
        actualizarMostrar(!mostrarFormulario);
    };

    // Registrar colaborador
    const registrarColaborador = (colaborador) => {
        console.log("nuevo colaborador", colaborador);
        // Spread operator
        actualizarColaboradores([...colaboradores, colaborador]);
    };

    // Eliminar colaborador
    const eliminarColaborador = (id) => {
        console.log("Eliminar colaborador: ", id);
        const nuevosColaboradores = colaboradores.filter(
            (colaborador) => colaborador.id !== id
        );
        actualizarColaboradores(nuevosColaboradores);
    };

    // Actualizar color de equipo
    const actualizarColor = (color, id) => {
        console.log("Actualizar: ", color + " - " + "Equipo: ", id);
        const equiposActualizados = equipos.map((equipo) => {
            if (equipo.id === id) {
                equipo.colorPrimario = color;
            }

            return equipo;
        });

        actualizarEquipos(equiposActualizados);
    };

    // Crear equipo
    const crearEquipo = (nuevoEquipo) => {
        console.log(nuevoEquipo);
        actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuidv4() }]);
    };

    return (
        <div>
            {/* {Header()}
            <Header></Header> */}
            <Header />
            {/* {mostrarFormulario === true ? <Formulario /> : <></>} */}
            {/* {mostrarFormulario ? <Formulario /> : <></>} */}

            {mostrarFormulario && (
                <Formulario
                    equipos={equipos.map((equipo) => equipo.titulo)}
                    registrarColaborador={registrarColaborador}
                    crearEquipo={crearEquipo}
                />
            )}
            <MiOrg cambiarMostrar={cambiarMostrar} />

            {/* {equipos.map((equipo) => {
                return <Equipo datos={equipo} key={equipo.titulo} />;
            })} */}

            {equipos.map((equipo) => (
                <Equipo
                    datos={equipo}
                    key={equipo.titulo}
                    colaboradores={colaboradores.filter(
                        (colaborador) => colaborador.equipo === equipo.titulo
                    )}
                    eliminarColaborador={eliminarColaborador}
                    actualizarColor={actualizarColor}
                />
            ))}

            <Footer />
        </div>
    );
}

export default App;
