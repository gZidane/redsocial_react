import { useState, useEffect } from 'react';

function Inicio2()
{
    // Declarar variable de estado
    // Un array vacio para los post
    const [ post, setPost ] = useState([]);
    
    // Usar el hook useEffect para conectarse a una api
    // Cuando carga el componente/pagina
    useEffect(() =>
    {
        // Usar la funcion fetch para llamar a una api
        fetch('http://localhost:8080/api/post')
        .then((response) => response.json())
        .then((data) =>
        {
            // Mostrar el consola lo obtenido desde la api
            console.log(data.post);
            // Actualizar la variable de estado
            // Con lo que regresa la api
            setPost(data.post);
            
        })
        .catch((error) =>
        {
            console.error('Error al cargar post:', error);
        });
        
    }, []);

    return(
    <div>
        { post.length > 0 ? 

        post.map((post_item)=>
        (
            <a href={ 'http://localhost:3000/post/' + post_item.id }>
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

        : null }
    </div>
    );
}

export default Inicio2;