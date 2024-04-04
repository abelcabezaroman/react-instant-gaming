import React from 'react'
import Logo from './Logo';
import Links from './Links';
import Menu from './Menu';

export default function Header({data}) {
    console.log(data);
  return (
    <div>
        <Logo/>
        {/* <Links/> */}
        {/* <Menu/> */}
    </div>
  )
}
