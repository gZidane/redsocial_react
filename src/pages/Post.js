import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./Post.module.css"


function Post()
{
    const { id } = useParams();

    const [ datosPost, setDatosPost ] = useState(null);
    const [ comentarios, setComentarios ] = useState(null);

    useEffect(() =>
    {
        // Usar la funcion fetch para llamar a una api
        fetch('http://localhost:8080/api/post/' + id)
        .then((response) => response.json())
        .then((data) =>
        {
            // Mostrar el consola lo obtenido desde la api
            console.log(data.post);
            setDatosPost(data.post);
            
        })
        .catch((error) =>
        {
            console.error('Error al cargar post:', error);
        });


        fetch('http://localhost:8080/api/post/' + id + '/comentarios')
        .then((response) => response.json())
        .then((data) =>
        {
            // Mostrar el consola lo obtenido desde la api
            setComentarios(data.comentarios);
            
        })
        .catch((error) =>
        {
            console.error('Error al cargar post:', error);
        });
        
    }, []);
    
    return(
        <div>
            
            { datosPost != null ?
            <div className={styles.post_item} >

              <div className={styles.post_cabecera}>
                
                <div className='post_cabecera_arriba'>
                  <div className='post_cabecera_arriba_izq'>
                    <img src="https://madeinfoot.ouest-france.fr/photos/buzz/2020/zoom/-20200624084318-2433.jpg" alt='' />
                  </div>
                  <div className='post_cabecera_arriba_der'>
                    <p>{ datosPost.usuario }</p>
                    <span>{ datosPost.fecha }</span>
                  </div>
                </div>
                <div className='post_cabecera_abajo'>
                  <p>{ datosPost.texto }</p>
                </div>
              </div>
              <div className='post_imagenes'>
                <img src={ datosPost.imagenes[0].url } />
              </div>
              <div className='me_gusta_contenedor'>
                <div className='me_gusta_contenedor_inner'>
                  <button className='btn_megusta'></button>
                  <span>{ datosPost.me_gusta }</span>
                </div>
                
              </div>

              <div className={styles.comentarios_contenedor}>
                <h3>Comentarios</h3>

                { comentarios != null ?
                comentarios.map((comentario)=>
                (
                    <div className={ styles.comentario_item }>
                        <div className={ styles.comentario_arriba }>
                            <div className={ styles.comentario_arriba_izq }>
                                <img src="https://madeinfoot.ouest-france.fr/photos/buzz/2020/zoom/-20200624084318-2433.jpg" alt='' />
                            </div>
                            <div className={ styles.comentario_arriba_der }>
                                <p>{ comentario.usuario }</p>
                                <span>{ comentario.fecha }</span>
                            </div>
                        </div>
                        <div className={ styles.comentario_abajo }>
                            <p>{ comentario.texto }</p>
                        </div>
                    
                    </div>
                ))
                 : null }

              </div>
              
            </div>
            : null }

        </div>
    );
}

export default Post;