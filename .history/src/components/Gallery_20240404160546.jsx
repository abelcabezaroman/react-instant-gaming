import React from 'react'
import Card from './Card';

export default function Gallery({data}) {
    console.log(data);
  return (
    <div>
        {data.map((item,index) => <Card data={item.card}/>)}
    </div>
  )
}
