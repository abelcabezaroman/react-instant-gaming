import React from 'react'
import "./Promotion.scss";

export default function Promotion({ data }) {
  return (
    <div className="c-promotion" style={{ backgroundImage: `url(${data.background})` }}>

      <div className='container'>
        <h2 className='b-text b-text--xxl'>{data.title}</h2>
        <p className='b-text'>{data.day}</p>
        <div className='d-flex align-items-center'>
          <p className='b-text'>{data.discount}</p>
          <p className='ms-4 b-text b-text--xxl'>{data.price}</p>
        </div>
      </div>
    </div>
  )
}
