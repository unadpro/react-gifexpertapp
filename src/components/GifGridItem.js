import React from 'react'

export const GifGridItem = ({id,title,url}) => {
   // console.log(id,title,url);
    return (
        
        <div className= "card animate__animated animate__bounce animate__delay-0.8s">           
            < a href={url} target="_blank" rel="noreferrer"><img src={url} alt={title}/></a>
            <div className="container">
                <h4><b>{title}</b></h4> 
            </div>
        </div>
    )
}
