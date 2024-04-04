import React from 'react'
import "./Card.scss";
export default function Card({ data }) {

  return (
    <div className='c-card'>
      <img className="c-card__img" src={data.img} alt={data.title} />

      <span className='b-text b-text--l'>{data.discount}</span>


      <div>
        <h3 className='b-text'>{data.title}</h3>
        <span className='b-text b-text--l'>{data.price}</span>
      </div>

    </div>
  )
}
