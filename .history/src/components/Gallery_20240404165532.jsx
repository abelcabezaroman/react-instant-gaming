import React from 'react'
import Card from './Card';

export default function Gallery({data}) {
  return (
    <div className='row'>
        {data.map((item,index) => <div><Card key={index} data={item.card}/></div>)}
    </div>
  )
}
