import React from 'react'
import "./Promotion.scss";
export default function Promotion({data}) {
  return (
    <div style={{backgroundImage: `url(${data.background})`}}>
      <h2>{data.title}</h2>
      <p>{data.day}</p>
      <p>{data.discount}</p>
      <p>{data.price}</p>
    </div>
  )
}
