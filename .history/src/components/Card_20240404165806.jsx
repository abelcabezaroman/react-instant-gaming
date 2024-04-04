import React from 'react'
import "./Card.scss";
export default function Card({data}) {

  return (
    <div className='c-card'>
        <img className="c-card__img" src={data.img} alt={data.title} />
        <h3 className='b-text'>{data.title}</h3>
        <span>{data.discount}</span>
        <span className='b-text b-text--l'>{data.price}</span>
        
    </div>
  )
}
