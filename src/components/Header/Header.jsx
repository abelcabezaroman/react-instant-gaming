import React from 'react'
import Logo from '../Logo/Logo';
import Links from '../Links/Links';
import Menu from '../Menu/Menu';

export default function Header({ data }) {
    console.log(data);
    return (
        <div>
            <Logo data={data.logo} />
            <Links links={data.links}/>
            <Menu links={data.menu}/>
        </div>
    )
}
