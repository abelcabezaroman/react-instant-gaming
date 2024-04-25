import React from 'react'

export default function TopGamesList({games}) {
  return (
    <ul>
        {games.map((game, index) => <li>
                    {game.name}, {game.platform}, {game.releaseYear}
        </li>)}
    </ul>
  )
}
