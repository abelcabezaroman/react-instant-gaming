import React from 'react'
import Review from './Review'

export default function Reviews({data}) {
  return (
    <div className='row'>
        {data.map((item, index) => <div key={index} className='col-4'>
            <Review data={item.review}/>
        </div>)}
    </div>
  )
}
