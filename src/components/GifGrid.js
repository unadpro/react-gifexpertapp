import React,{useState,useEffect} from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {

    const [images, setImages] = useState([])
    
     useEffect(() =>{
        getGifs(categoria);
     },[]); //con  [] lista de dependencias vacia, no se dispara la peticion de nuevo...

    const getGifs = async (categoria) =>{
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=6&api_key=8xM8glGI28CuFcTurkewTMFxnSKwHyry`

        const resp = await fetch(url);

        const {data} = await resp.json();

        const gifs = data.map( img =>{
            return {
                 id: img.id
                ,title: img.title
                ,url: img.images.fixed_height.url
            }
        })

        console.log(gifs);
        setImages(gifs);
    }

    

    return (
        <>
        <h3>{categoria}</h3>
        <hr/>
        <div className="card-grid">
           
                {
                    images.map( img => (
                        <GifGridItem 
                                key = { img.id} 
                                {...img} />
                    ))

                     // images.map( ({id,title}) => (
                //    <li key={id} > {title} </li> 
                             
                // ))

                // images.map( img => (
                //     <GifGridItem 
                //             key = { img.id} 
                //             img = {img} />
                // ))
                }
        </div>
        </>
        
  
              
               

                
                
            
       

            

    )
}
