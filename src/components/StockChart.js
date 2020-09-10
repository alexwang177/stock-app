import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function StockChart(props) {

    // update stock chart whenever the filter text changes
    useEffect(() => {
    }, [props.text])

    // build the tickers (the chart) based on the filter text 
    const tickers = props.stockMap == null ? null : Object.keys(props.stockMap).map((key) => {
        return key.startsWith(props.text.toUpperCase()) ? (
            <div key={key}>
                <Link to={`/stock/${key}`}>
                    <button>{key}</button>
                    {props.stockMap[key] === 1 ? <h5>Fav</h5> : null}
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
