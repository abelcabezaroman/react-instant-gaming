import React from 'react'
import Card from './Card';

export default function Gallery({data}) {
  return (
    <div className='row'>
        {data.map((item,index) => <div className='col-12 col-lg-4'><Card key={index} data={item.card}/></div>)}
    </div>
  )
}
