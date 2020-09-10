import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function StockChart(props) {

    // const stockTickers = Object.keys(props.stockMap).forEach( function(stock) {
    //     return 
    //     (
    //         <div>
    //             <h5>stockName</h5>
    //         </div>
    //     )
    // })

    const tickers = Object.keys(props.stockMap).map((key) => {
        return (
            <div>
                <Link to={`/stock/${key}`}>
                    <button>{key}</button>
                </Link>
            </div>
        )
    })

    useEffect(() => {
        console.log(props.stockMap)
    }, [])

    return (
        <div>
            {tickers}
        </div>
    )
}
