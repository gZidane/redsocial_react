
import { useEffect, useState } from 'react';

// Importar estilos css
import './Inicio.css';

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
          console.error('Error al cargar usuarios:', error);
      });


      var datos = 
      {

          "proveedores":
          [
              {
                  "id": 1,
                  "nombre": "Productos del centro S.A de C.V",
                  "dirección": "Avenida del centro SN, CDMX",
                  "productos": 
                  [
                      { "id": 1, "nombre": "TV 55 pulgadas samsung", "precio": 15000 },
                      { "id": 2, "nombre": "Macbook air 2022", "precio": 25000 },
                      { "id": 3, "nombre": "Audifonos Marshall", "precio": 3500 },
                  ]
              },
              {
                  "id": 2,
                  "nombre": "Comercializadora de precios bajos S. de R.L",
                  "dirección": "Calle alamos SN, Toluca, Edomex",
                  "productos": 
                  [
                      { "id": 4, "nombre": "Iphone 14 pro max", "precio": 27000 },
                      { "id": 5, "nombre": "Laptop gamer MSI", "precio": 20000 },
                      { "id": 6, "nombre": "Samsung S24", "precio": 22000 },
                  ]
              },
              
          ]

      }
      
  }, []); 

  return (
    <div>
      <h1>Página de Inicio</h1>

      { post.length > 0 ? 

      post.map((post_item)=>
      (
          <a href={ 'http://localhost:3000/post/' + post_item.id } key={ post_item.id }>
            <div className='post_item' >

              <div className='post_cabecera'>
                
                <div className='post_cabecera_arriba'>
                  <div className='post_cabecera_arriba_izq'>
                    <img src="https://madeinfoot.ouest-france.fr/photos/buzz/2020/zoom/-20200624084318-2433.jpg" alt='' />
                  </div>
                  <div className='post_cabecera_arriba_der'>
                    <p>{ post_item.usuario }</p>
                    <span>{ post_item.fecha }</span>
                  </div>
                </div>
                <div className='post_cabecera_abajo'>
                  <p>{ post_item.texto }</p>
                </div>
              </div>
              <div className='post_imagenes'>
                <img src={ post_item.imagenes[0].url } />
              </div>
              <div className='me_gusta_contenedor'>
                <div className='me_gusta_contenedor_inner'>
                  <button className='btn_megusta'></button>
                  <span>{ post_item.me_gusta }</span>
                </div>
                
              </div>
              
            </div>
          </a>
        
      ))

       : 'Cargando...' }
    </div>
  );
}

export default Inicio;