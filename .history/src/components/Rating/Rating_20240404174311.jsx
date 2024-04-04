import React from 'react'
import { Rating } from 'primereact/rating';

export default function Rating({num}) {
  return (
    <div>
      <Rating value={value} onChange={(e) => setValue(e.value)} />

    </div>
  )
}
