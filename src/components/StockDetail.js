import React from 'react'

import { Link } from 'react-router-dom'

export default function StockDetail({ match }) {
    return (
        <div>
            <h1>{match.params.id}</h1>
            <Link to="/">
                    <button>back</button>
            </Link>
        </div>
    )
}
