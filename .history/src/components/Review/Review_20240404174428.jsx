import React from 'react'
// import Rating from '../Rating/Rating'
import { Rating } from 'primereact/rating';

export default function Review({data}) {
  return (
    <div>
        <h2>{data.title}</h2>
        <img src={data.avatar} alt={data.title} />
        <p>{data.description}</p>
        <p>{data.date}</p>
        {/* <Rating num={data.rating}/> */}
        <Rating/>
    </div>
  )
}
