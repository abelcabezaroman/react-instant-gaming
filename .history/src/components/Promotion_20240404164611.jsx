import React from 'react'
import "./Promotion.scss";

export default function Promotion({ data }) {
  return (
    <div className="c-promotion" style={{ backgroundImage: `url(${data.background})` }}>

      <div className='container d-flex align-items-center'>
        <div className="c-promotion__info">
          <h2>{data.title}</h2>
          <p>{data.day}</p>
          <p>{data.discount}</p>
          <p>{data.price}</p>
        </div>
      </div>
    </div>
  )
}
