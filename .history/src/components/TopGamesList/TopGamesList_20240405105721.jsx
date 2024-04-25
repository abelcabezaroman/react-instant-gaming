import React from 'react'

export default function TopGamesList({games}) {
  return (
    <ul>
        {games.map((game, index) => <li key={index}>
                    {game.name}, {game.platform}, {game.releaseYear}
        </li>)}
    </ul>
  )
}
