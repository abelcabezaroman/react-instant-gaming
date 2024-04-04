import React from 'react'

export default function Logo({data}) {
    console.log(data);
  return (
    <div>
        <img src={data} alt="" />
    </div>
  )
}
