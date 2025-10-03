import { useState, useEffect } from 'react';

const Formulario = ({ agregarAlumno, alumnoEditando, cancelarEdicion }) => {
    const [formData, setFormData] = useState({
        no_ine: '',
        nombre: '',
        apellido: '',
        telefono: '',
        correo: ''
    });

    // Cargar datos del alumno a editar
    useEffect(() => {
        if (alumnoEditando) {
            setFormData({
                no_ine: alumnoEditando.no_ine || '',
                nombre: alumnoEditando.nombre || '',
                apellido: alumnoEditando.apellido || '',
                telefono: alumnoEditando.telefono || '',
                correo: alumnoEditando.correo || ''
            });
        } else {
            setFormData({
                no_ine: '',
                nombre: '',
                apellido: '',
                telefono: '',
                correo: ''
            });
        }
    }, [alumnoEditando]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validación
        if (!formData.no_ine || !formData.nombre || !formData.apellido) {
            alert('Por favor complete los campos obligatorios');
            return;
        }

        // Agregar o editar alumno
        agregarAlumno(formData);
        
        // Limpiar formulario solo si no está editando
        if (!alumnoEditando) {
            setFormData({
                no_ine: '',
                nombre: '',
                apellido: '',
                telefono: '',
                correo: ''
            });
        }
    };

    const handleCancelar = () => {
        setFormData({
            no_ine: '',
            nombre: '',
            apellido: '',
            telefono: '',
            correo: ''
        });
        if (alumnoEditando) {
            cancelarEdicion();
        }
    };

    return (
        <div className="col-md-5 mt-2">
            <form onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-header">
                        {alumnoEditando ? 'Editar Estudiante' : 'Formulario de Registro'}
                    </div>
                    <div className="card-body">

                        <div className="input-group mb-3">
                            <span className="input-group-text">No.INE:</span>
                            <input 
                                type="number" 
                                className="form-control" 
                                name="documento"
                                value={formData.documento}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text">Nombre:</span>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text">Apellido:</span>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="apellido"
                                value={formData.apellido}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text">Telefono:</span>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text">Correo:</span>
                            <input 
                                type="email" 
                                className="form-control" 
                                name="correo"
                                value={formData.correo}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-success">
                                {alumnoEditando ? 'Actualizar' : 'Enviar'}
                            </button>
                            <button type="button" className="btn btn-secondary" onClick={handleCancelar}>
                                {alumnoEditando ? 'Cancelar Edición' : 'Restablecer'}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Formulario;