import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function StockChart(props) {

    useEffect(() => {
        console.log(props.text)
    }, [props.text])

    const tickers = Object.keys(props.stockMap).map((key) => {
        return key.startsWith(props.text.toUpperCase()) ? (
            <div>
                <Link to={`/stock/${key}`}>
                    <button>{key}</button>
                </Link>
            </div>
        ) : 
        null
    })

    return (
        <div>
            {tickers}
        </div>
    )
}
