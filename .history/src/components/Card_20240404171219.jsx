import React from 'react'
import "./Card.scss";
export default function Card({ data }) {

  return (
    <div className='c-card'>
      <div className='c-card__frame'>
        <img className="c-card__img" src={data.img} alt={data.title} />
        <span className='c-card__discount b-discount'>-{data.discount}%</span>
      </div>

      <div className='d-flex justify-content-between align-items-center'>
        <h3 className='b-text'>{data.title}</h3>
        <span className='b-text b-text--l'>{data.price}</span>
      </div>

    </div>
  )
}
