import React, { Component } from "react";
import City from "./city";
import Camp from './camp';
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cityNumber: props.cityNumber,
            sentData: {
                camp:[{
                    element: 30,
                    arrivedWarriors:[],
                }, {
                    element: 70,
                    arrivedWarriors:[],
                }],
                city:[{
                    redWarrior:{
                        flag: 'red',
                        name: "ninja",
                        element: 30,
                        attack: 40,
                        weapons: {
                            sword: 5,
                            bow: 0,
                            bomb: 0,
                        },
                    },
                    blueWarrior: null,
                    flag: "red",
                    element: 0,
                }, {
                    redWarrior: null,
                    blueWarrior: null,
                    flag: null,
                    element: 20,
                }, {
                    redWarrior: null,
                    blueWarrior: {
                        flag:'blue',
                        name: "dragon",
                        element: 100,
                        attack: 40,
                        weapons: {
                            sword: 0,
                            bow: 3,
                            bomb: 0,
                        },
                    },
                    flag: "blue",
                    element: 30,
                }]
            }
        }
    }

    render() {
        return (
            <div className='city-container'>
                {this.createCity(this.state.cityNumber)}
            </div>
        )
    }
    createCity(number) {
        let res = [];
        let {sentData} = this.state;
        res.push(<Camp key={-1} color='red' data={sentData.camp[0]}/>);
        for(let i = 0; i < number; i++) res.push((<City key={i} data={sentData.city[i]}/>));
        res.push(<Camp key={this.state.cityNumber} color='blue' data={sentData.camp[1]}/>)
        return res;
    }
}
