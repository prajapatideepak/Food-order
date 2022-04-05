import React from 'react'

export default function Order() {
    var current = new Date();
    var dollar = 0;    
    return (
    <div className='order'>
        <h1>
            My Order
        </h1>
        <p>
            {current.toLocaleTimeString()}
        </p>
        <div className='bill'>
            <div>

            </div>
            <div className='drag'>
                <h1>Drag&Drop</h1>
            </div>
            <div className='heading'>
                <p> Total</p> 
                <h3>$ {dollar} </h3>
            </div>

            <div>
                <button className='btn'> Checkout </button>
            </div>
        </div>
    </div>
    )
}
