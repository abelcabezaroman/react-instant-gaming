import React from 'react'

export default function Links({ links }) {
    console.log(links);
    return (
        <nav>
            <ul>
                {links.map((link, index) => <li></li>)}
            </ul>
        </nav>
    )
}
