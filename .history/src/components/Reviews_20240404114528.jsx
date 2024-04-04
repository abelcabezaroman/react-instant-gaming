import React from 'react'
import Review from './Review'

export default function Reviews({data}) {
  return (
    <div>
        {data.map((item, index) => <div>
            <Review data={item.review}
        </div>)}
    </div>
  )
}
