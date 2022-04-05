import React from 'react'
import data from './menudata';
export default function Item() {
 
    return (
    <div className='items'>
        <div>

        </div>
        {data.map((item)=>{
            return(
                <div key={item.name} className={`card  ${item.color}`}>
                    <div className='heading'> 
                        <span className='rating '>&#11088; {item.rating}</span>
                        <span className="fav">&#9825;</span>
                    </div>

                    <div>
                        <h5>{item.name} <span className='fav light'>{item.weight} </span> </h5>
                        <h3>{item.price}</h3>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
