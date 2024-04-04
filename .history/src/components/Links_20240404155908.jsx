import React from 'react'

export default function Links({ links }) {
    console.log(links);
    return (
        <nav>
            {links.map((link, index) =>
                <a key={index} href={link.url}>{link.text}</a>
            )}
        </nav>
    )
}
