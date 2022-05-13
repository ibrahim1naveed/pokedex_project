import React from 'react'

const PokemonThumbnail = ({ id, name, image, type, _callback }) => {

    const style = type + " thumb-container";

  return (
    <div className={style}>
        <div className="number">
            <small>#0{id}</small>
        </div>
        <img src={image} alt={name}></img>
        <div className="detail-wrapper">
            <h2>{name}</h2>
            <small>Type: {type}</small>
        </div>
    </div>
  )
}

export default PokemonThumbnail