
import { useEffect, useState } from 'react';

// Importar estilos css
import './Inicio.css';
import Postfeed from '../components/Postfeed/Postfeed';

function Inicio() {

  // Declarar una variable de estado
  // const [ como_estas, setComo_estas ] = useState( "Bien" );

  // // Actualizar variable de estado
  // setComo_estas("Más o menos");

  // setComo_estas("Qué te importa");

  // setComo_estas("Ya mejor bro, me alteré xD");

  // Variable de estado para guardar los post que llegan de la API
  // Inicia como un arrat vacío []
  const [ post, setPost ] = useState([]);



  // Usar el hook useEffect para pedir datos a una API
  // Esto se ejecuta cuando carga la pagina
  useEffect(() =>
  {
      // Hacer el fetch cuando se monte el componente
      fetch('http://localhost:8080/api/post')
      .then((response) => response.json())
      .then((data) =>
      {
          console.log(data.post);

          // Guardar los datos de la API en la variable de estado post
          setPost(data.post);
          
      })
      .catch((error) =>
      {
          console.error('Error al cargar datos:', error);
      });

      
  }, []); 

  return (
    <div>
      <h1>Página de Inicio</h1>

      { post.length > 0 ? 

      post.map((post_item)=>
      (
      
        <Postfeed id={ post_item.id } usuario={ post_item.usuario } fecha={ post_item.fecha } texto={ post_item.texto } imagenes={ post_item.imagenes } me_gusta={ post_item.me_gusta } />

        
      ))

       : 'Cargando...' }
    </div>
  );
}

export default Inicio;