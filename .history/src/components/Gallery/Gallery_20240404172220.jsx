import React from 'react'
import Card from '../Card/Card';

export default function Gallery({data}) {
  return (
    <div className='row'>
        {data.map((item,index) => <div className='col-12 col-lg-4' key={index} ><Card data={item.card}/></div>)}
    </div>
  )
}
