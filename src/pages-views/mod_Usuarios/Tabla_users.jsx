import React, { useEffect, useState } from 'react';
import { Tabla_users_item } from './Tabla_users_item';
import './Tabla.css';
import { Register_user } from './Register_user';
import TituloyDesc from '../../components/Titles/TituloyDesc';
import axios from 'axios';

function Tabla_users() {
  const [datos, setDatos] = useState([]);
  const [registerform, setRegisterform] = useState(false);

  const consulta = () => {
    axios
      .get(
        'https://backend-sigfvi-subida-iota.vercel.app/usuario/usuario_empleado'
      )
      .then((response) => {
        setDatos(response.data);
      });
  };

  useEffect(() => {
    consulta();
  }, []);

  useEffect(() => {
    consulta();
  }, [datos]); // Se ejecutará cuando cambien los datos

  return (
    <>
      <div>
        <TituloyDesc
          titulo="Usuarios"
          descripcion="Muestra los Usuarios que hacen parte del sistema y permite su respectivo registro y actualizacion."
        />
      </div>
      <div className="main-container">
        <hr />
        <div className="table-container">
          <div className="option-container">
            <form className="form">
              <div className="buscar">
                <input
                  type="search"
                  id="search"
                  name="search"
                  placeholder="buscar"
                  className="barra-buscar"
                />
                <button className="boton b7">Buscar</button>
              </div>
              <div className="teush">
                <button
                  type="button"
                  className="boton b4"
                  id="lanzar-modal"
                  name="agregar"
                  onClick={() => setRegisterform(true)}
                >
                  Agregar
                </button>
              </div>
              <Register_user
                isOpen={registerform}
                closeModal={() => setRegisterform(false)}
                reConsulta={consulta}
              />
            </form>
          </div>

          <section className="table__body">
            <table className="tabla">
              <thead>
                <th>
                  <h2>Nombre</h2>
                </th>
                <th>
                  <h2>Tipo Id</h2>
                </th>
                <th>
                  <h2>Id</h2>
                </th>
                <th>
                  <h2>Tipo de Usuario</h2>
                </th>
                <th>
                  <h2>Telefono</h2>
                </th>
                <th>
                  <h2>Correo</h2>
                </th>
                <th>
                  <h2>Estado</h2>
                </th>
                <th className="acciones_General_Tittle">
                  <h2>Acciones</h2>
                </th>
              </thead>
              <tbody>
                {!datos
                  ? 'Loading.....'
                  : datos.map((datos, index) => {
                      return (
                        <Tabla_users_item
                          key={datos.id}
                          id={datos.id}
                          tipoId={datos.tipoId}
                          name1={datos.Nombre_Usuario}
                          name2={datos.Segundo_Nombre_Usuario}
                          lastname1={datos.Apellido_Usuario}
                          lastname2={datos.Segundo_Apellido_Usuario}
                          tel={datos.telefono}
                          email={datos.Email_Usuario}
                          contrasena={datos.contrasena}
                          cargo={datos.cargo}
                          estado={datos.estado}
                          idEstado={datos.ID_Estado_FK}
                          consulta={consulta}
                        />
                      );
                    })}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </>
  );
}

export default Tabla_users;
