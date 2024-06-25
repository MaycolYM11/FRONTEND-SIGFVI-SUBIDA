import React, { useEffect, useState } from 'react';
import '../Tabla.css';
import EditAdmin from './EditAdmin';
import Swal from 'sweetalert2';
import axios from 'axios';

export const TablaAdminItem = (props) => {
  const [textoActivar, setTextoActivar] = useState('');
  const [mostrarEditForm, setMostrarEditForm] = useState(false);
  const [estado, setEstado] = useState(parseInt(props.idEstado));

  const ponerTexto = () => {
    console.log('estado actualmente', estado);
    if (estado === 1) {
      setTextoActivar('Desactivar');
    } else if (estado === 0) {
      setTextoActivar('Activar');
    }
  };

  useEffect(() => {
    ponerTexto();
  }, []);

  const handleMostrarEdit = () => {
    setMostrarEditForm(!mostrarEditForm);
  };

  function confirmDelete(val) {
    Swal.fire({
      icon: 'warning',
      title:
        '<h2 style="color:yellow">¿Desea Cambiar de estado este registro?</h2>',
      background: '#252327',
      confirmButtonColor: '#f2bb15',
      confirmButtonText: textoActivar,
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      toast: true,
    }).then(async (response) => {
      if (response.isConfirmed) {
        if (estado === 1 || estado === '1') {
          setEstado(0);
        } else if (estado === 0 || estado === '0') {
          setEstado(1);
        }

        try {
          if (estado === 1) {
            await axios
              .put(
                `https://backend-sigfvi-subida-iota.vercel.app/usuario/activarestadoadmin/${val.id}`,
                {
                  state: estado,
                }
              )
              .then(() => {
                Swal.fire({
                  title: 'Actualizado!',
                  text: `Se cambio el estadp del Gerente ${val.name1}`,
                  icon: 'success',
                });
                props.consulta();
                ponerTexto();
                console.log(estado);
              });
          } else if (estado === 0) {
            await axios
              .put(
                `https://backend-sigfvi-subida-iota.vercel.app/usuario/desactivarestadoadmin/${val.id}`,
                {
                  state: estado,
                }
              )
              .then((response) => {
                if (response.data.continue) {
                  Swal.fire({
                    title: 'Actualizado!',
                    text: `Se cambio el estado del Gerente ${val.name1}`,
                    icon: 'success',
                  });
                  props.consulta();
                  ponerTexto();
                  console.log(estado);
                } else {
                  Swal.fire({
                    title: 'Actualizado!',
                    text: `No se cambio el estado del Gerente ${val.name1}`,
                    icon: 'error',
                  });
                  props.consulta();
                  setEstado(1);
                  console.log(estado);
                }
              });
          }
          //axios.delete(`https://backend-sigfvi-subida-iota.vercel.app/Delete/${val.id}`).then(()=>{
          // await axios.put(`https://backend-sigfvi-subida-iota.vercel.app/usuario/cambioestadoadmin/${val.id}`, {
          //     "state": estado
          // })
        } catch (error) {
          console.error(
            'no se pudo cambiar de estado en la función confirmDelete',
            error
          );
        }
      }
    });
  }
  //console.log(props);

  return (
    <>
      <tr>
        <td>
          <h3>{props.name1 + ' ' + props.lastname1}</h3>
        </td>
        <td>
          <h3>{props.tipoId}</h3>
        </td>
        <td>
          <h3>{props.id}</h3>
        </td>
        <td>
          <h3>{props.cargo}</h3>
        </td>
        <td>
          <h3>{props.tel}</h3>
        </td>
        <td>
          <h3>{props.email}</h3>
        </td>
        <td>
          <h3>{props.estado}</h3>
        </td>
        <td className="acciones_General">
          <button
            type="button"
            id="edit"
            name="edit"
            className="boton b1"
            onClick={handleMostrarEdit}
          >
            Editar
          </button>
          <button
            type="button"
            id="delete"
            name="delete"
            className="boton b2"
            onClick={() => {
              confirmDelete(props);
            }}
          >
            {textoActivar}
          </button>
        </td>
      </tr>
      {mostrarEditForm && (
        <EditAdmin
          closeModal={handleMostrarEdit}
          datos={props}
          consulta={props.consulta}
        />
      )}
    </>
  );
};
