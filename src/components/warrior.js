import React from "react";
export default function({data}) {
    if(data === null) return <div className='warrior'/>
    return (<div className={`warrior ${data.flag==='red'?'red':'blue'}`}>
        <p>name: {data.name}</p>
        <p>element: {data.element}</p>
        <p>attack: {data.attack}</p>
        {data.weapons.sword > 0? <p>sword: +{data.weapons.sword} attack</p>: <p></p>}
        {data.weapons.bow > 0? <p>arrows: {data.weapons.bow}</p>: <p></p>}
        {data.weapons.bomb > 0? <p>bomb</p>: <p></p>}
    </div>)
}