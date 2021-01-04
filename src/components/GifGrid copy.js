//import React, { useState, useEffect } from "react";
import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";
// import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ categoria }) => {
//   const [images, setImages] = useState([]);

const {loading} = useFetchGifs();

//console.log( loading);

//   useEffect(() => {
//     getGifs(categoria).then(setImages);
//     //getGifs(categoria);
//   }, [categoria]); //con  [] lista de dependencias vacia, no se dispara la peticion de nuevo...

  return (
    <>
      <h3>{categoria}</h3>
      
      <hr />
      {loading ? 'Cargando ...' : 'Data Cargada!!!'}
      {/* <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
        {
          // images.map( ({id,title}) => (
          //    <li key={id} > {title} </li>
          // ))
          // images.map( img => (
          //     <GifGridItem
          //             key = { img.id}
          //             img = {img} />
          // ))
        }
      </div> */}
    </>
  );
};
