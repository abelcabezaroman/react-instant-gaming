import React from 'react'

export default function Review({data}) {
  return (
    <div>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <p>{data.date}</p>
    </div>
  )
}
