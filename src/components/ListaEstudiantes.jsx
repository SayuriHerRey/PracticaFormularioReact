const ListaEstudiantes = ({ alumnos, onEliminarAlumno, onEditarAlumno }) => {
    return (
        <div className="col-md-7 mt-2">
            <div className="card">
                <div className="card-header">Lista de Estudiantes ({alumnos.length})</div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th>Num.INE</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Teléfono</th>
                                    <th>Correo</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {alumnos.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" className="text-center text-muted">
                                            No hay estudiantes registrados
                                        </td>
                                    </tr>
                                ) : (
                                    alumnos.map((alumno) => (
                                        <tr key={alumno.id}>
                                            <td>{alumno.no_ine}</td>
                                            <td>{alumno.nombre}</td>
                                            <td>{alumno.apellido}</td>
                                            <td>{alumno.telefono}</td>
                                            <td>{alumno.correo}</td>
                                            <td>
                                                <button 
                                                    className="btn btn-warning btn-sm me-1"
                                                    onClick={() => onEditarAlumno(alumno)}
                                                >
                                                    Editar
                                                </button>
                                                <button 
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => onEliminarAlumno(alumno.id)}
                                                >
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListaEstudiantes;