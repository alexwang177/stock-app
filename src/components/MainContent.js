import React, { useState }from 'react'

import StockChart from './StockChart'

export default function MainContent(props) {

    // state that holds text from the input bar
    let[text, setText] = useState("")

    return (
        <div>
            <div>
                Filter <input type="text" onChange={(e) => setText(e.target.value)}></input>
            </div>
            <StockChart stockMap={props.stockMap} text={text}/>
        </div>
    )
}
