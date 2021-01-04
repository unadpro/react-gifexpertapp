import React, { useState } from "react";

import  uuid from 'uuid/dist/v4';
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () =>{

    //const categories = ['One Punch', 'Samurai X', 'Goku']

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //  // setCategories(['Loonie Toons',...categories]);
    //  setCategories(c => [...c,'Space Jam'])

    // }

    return (
        <>      
          <h2>GifExpertApp</h2>   
          <AddCategory setCategories  = {setCategories}/> 
         <hr />

         <ol>
         { categories.map( cat => 
                (<GifGrid key = {uuid()} 
                categoria = {cat} />) )
         
         }
          

         {/* {
             categories.map(cat =>{
               <li key= { uuid()}>{cat}</li>
             })
         }        */}
         </ol>       

         
        </>
      );

}



