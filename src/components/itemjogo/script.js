import React from "react";

export const ItemJogo = (props) => {
    return(
        <div className='jogo' key={props.key}>
            <img src={process.env.PUBLIC_URL + `assets/${props.plataforma}.jpg`} alt={props.plataforma}/>
            <p>{props.nome}</p>
        </div>
    )
}