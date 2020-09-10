import React, { useState, useEffect }from 'react'

import StockChart from './StockChart'

export default function MainContent() {

    let[stockMap, setStockMap] = useState({
        "MOMO": 0,
        "TPL": 0,
        "MU": 0,
        "CORT": 0,
        "NFLX": 0,
        "PAYC": 0,
        "NVDA": 0,
        "NXST": 0,
        "TRTN": 0,
        "SSNC": 0
    })

    return (
        <div>
            <div>
                Filter <input type="text"></input>
            </div>
            <StockChart stockMap={stockMap}/>
        </div>
    )
}
