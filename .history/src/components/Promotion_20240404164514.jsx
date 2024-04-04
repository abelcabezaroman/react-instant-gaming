import React from 'react'
import "./Promotion.scss";

export default function Promotion({data}) {
  return (
    <div className="c-promotion" style={{backgroundImage: `url(${data.background})`}}>

      <di className="c-promotion__info">
      <h2>{data.title}</h2>
      <p>{data.day}</p>
      <p>{data.discount}</p>
      <p>{data.price}</p>
      </di>
   
    </div>
  )
}
