import { useState, useEffect } from 'react';
import './App.css';
import Formulario from './components/Formulario.jsx';
import ListaEstudiantes from './components/ListaEstudiantes.jsx';

function App() {
  const [alumnos, setAlumnos] = useState([]);
  const [alumnoEditando, setAlumnoEditando] = useState(null);

  // Cargar alumnos del localStorage al iniciar
  useEffect(() => {
    const alumnosGuardados = localStorage.getItem('alumnos');
    if (alumnosGuardados) {
      setAlumnos(JSON.parse(alumnosGuardados));
    }
  }, []);

  // función para agregar alumno
  const agregarAlumno = (nuevoAlumno) => {
    if (alumnoEditando) {
      // Editar alumno existente
      const nuevosAlumnos = alumnos.map(alumno => 
        alumno.id === alumnoEditando.id 
          ? { ...nuevoAlumno, id: alumnoEditando.id }
          : alumno
      );
      setAlumnos(nuevosAlumnos);
      localStorage.setItem('alumnos', JSON.stringify(nuevosAlumnos));
      setAlumnoEditando(null);
    } else {
      // Agregar nuevo alumno
      const nuevosAlumnos = [...alumnos, { ...nuevoAlumno, id: Date.now() }];
      setAlumnos(nuevosAlumnos);
      localStorage.setItem('alumnos', JSON.stringify(nuevosAlumnos));
    }
  };

  // función para eliminar alumno
  const eliminarAlumno = (id) => {
    const nuevosAlumnos = alumnos.filter(alumno => alumno.id !== id);
    setAlumnos(nuevosAlumnos);
    localStorage.setItem('alumnos', JSON.stringify(nuevosAlumnos));
  };

  // función para editar alumno
  const editarAlumno = (alumno) => {
    setAlumnoEditando(alumno);
  };

  // función para cancelar edición
  const cancelarEdicion = () => {
    setAlumnoEditando(null);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* Formulario al lado izquierdo */}
          <Formulario 
            agregarAlumno={agregarAlumno}
            alumnoEditando={alumnoEditando}
            cancelarEdicion={cancelarEdicion}
          />
          
          {/* Lista de estudiantes al lado derecho */}
          <ListaEstudiantes 
            alumnos={alumnos} 
            onEliminarAlumno={eliminarAlumno}
            onEditarAlumno={editarAlumno}
          />
        </div>
      </div>
    </>
  );
}

export default App;