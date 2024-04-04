import React from 'react'

export default function Card({data}) {

  return (
    <div>
        <img src={data.img} alt={data.title} />
        <h3>{data.title}</h3>
        <span>{data.discount}</span>
        <span>{data.price}</span>
        
    </div>
  )
}
