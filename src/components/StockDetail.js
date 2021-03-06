import React, { useEffect }from 'react'

import { Link } from 'react-router-dom'

export default function StockDetail({ match, stockMap, changeFavorite }) {

    // update stock detail page whenever the favorite value changes
    useEffect(() => {
    }, [match.params.id])

    return (
        <div>

            <h1>{match.params.id}</h1>
            <h1>{stockMap[match.params.id] === 1 ? "Favorite: Yes" : "Favorite: No"}</h1>

            {stockMap[match.params.id] === 0 ? 
                <button onClick={() => changeFavorite(match.params.id, 1)}>favorite</button> : 
                <button onClick={() => changeFavorite(match.params.id, 0)}>un-favorite</button>}

            <Link to="/">
                    <button>back</button>
            </Link>
        </div>
    )
}
