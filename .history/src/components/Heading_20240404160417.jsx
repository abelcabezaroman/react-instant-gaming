import React from 'react'

export default function Heading({data}) {
  return (
    <div>
        <h2><a href={data.url}>{data.text}</a></h2>
    </div>
  )
}
