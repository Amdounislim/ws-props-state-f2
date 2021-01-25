import React from 'react'

const Items = ({list}) => {
    return (
        <div>
           {list.map(el=><h5>{el}</h5>)} 
        </div>
    )
}

export default Items
