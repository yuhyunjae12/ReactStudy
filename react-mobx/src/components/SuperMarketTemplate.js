import React, { Component } from 'react'
import './SuperMarketTemplate.css';

const SuperMarketTemplate =({ items, basket }) =>{
    return (
        <div className="SuperMarketTemplate">
            <div className="items-wrapper">
                <h2>상품</h2>
                {items}
            </div>
            <div>
                <h2>장바구니</h2>
                {basket}
            </div>
        </div>
    )
}

export default SuperMarketTemplate;