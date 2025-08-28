

function Postfeed(props)
{

    const { id, usuario, fecha, texto, imagenes, me_gusta } = props;


    return(
        <a href={ 'http://localhost:3000/post/' + id }>
                <div className='post_item' >

                <div className='post_cabecera'>
                    
                    <div className='post_cabecera_arriba'>
                    <div className='post_cabecera_arriba_izq'>
                        <img src="https://madeinfoot.ouest-france.fr/photos/buzz/2020/zoom/-20200624084318-2433.jpg" alt='' />
                    </div>
                    <div className='post_cabecera_arriba_der'>
                        <p>{ usuario }</p>
                        <span>{ fecha }</span>
                    </div>
                    </div>
                    <div className='post_cabecera_abajo'>
                    <p>{ texto }</p>
                    </div>
                </div>
                <div className='post_imagenes'>
                    <img src={ imagenes[0].url } />
                </div>
                <div className='me_gusta_contenedor'>
                    <div className='me_gusta_contenedor_inner'>
                    <button className='btn_megusta'></button>
                    <span>{ me_gusta }</span>
                    </div>
                    
                </div>

                
                </div>
            </a>
    );
}

export default Postfeed;