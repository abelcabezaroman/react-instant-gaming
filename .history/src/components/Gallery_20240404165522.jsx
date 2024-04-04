import React from 'react'
import Card from './Card';

export default function Gallery({data}) {
  return (
    <div className='row'>
        {data.map((item,index) => <Card key={index} data={item.card}/>)}
    </div>
  )
}
