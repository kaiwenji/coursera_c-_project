import React from 'react';
export default function({data, color}) {
    return (<div className={`camp ${color}`}>
        <p className='color-white'>element: {data.element}</p>
        {data.arrivedWarriors.map(function(warrior) {
            <p>{warrior.name}</p>
        })}
    </div>)
}