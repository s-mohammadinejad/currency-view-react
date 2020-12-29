import React from 'react'
import './currency.css'

function currency() {
    return (
        <div className="currency">
            <div className="currency__name"></div>
            <div className="currency__sell"></div>  
            <div className="currency__buy"></div>
            <div className="currency__pic"></div>
            <div className="currency__changes"></div>
        </div>
    )
}

export default currency