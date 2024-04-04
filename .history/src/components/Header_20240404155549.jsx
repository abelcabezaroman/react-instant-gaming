import React from 'react'
import Logo from './Logo';
import Links from './Links';
import Menu from './Menu';

export default function Header({data}) {
    console.log(data);
  return (
    <div>
        <Logo img={data.logo}/>
        {/* <Links/> */}
        {/* <Menu/> */}
    </div>
  )
}
