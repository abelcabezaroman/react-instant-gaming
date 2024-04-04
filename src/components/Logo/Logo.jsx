import React from 'react'

export default function Logo({data}) {
    console.log(data);
  return (
    <div>
        <img className="u-width-150" src={data.img} alt="" />
    </div>
  )
}
