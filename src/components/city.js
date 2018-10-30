import React from "react";
import Warrior from "./warrior";
export default function({data}) {
    return <div className={data.flag == 'red'? 'city red': data.flag === 'blue'? 'city blue': 'city'}>
        <p>element: {data.element}</p>
        <div className="city-row">
            <Warrior data={data.redWarrior}/>
            <Warrior data={data.blueWarrior}/>
        </div>
    </div>
}