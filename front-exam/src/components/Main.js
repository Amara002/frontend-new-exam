import React, { Component } from 'react';
import axios from 'axios';
import Gigimon from './Gigimon';

class Main extends Component {
    constructor (props){
        super(props);
        this.state = {
            serverLink : process.env.REACT_APP_SERVER,
            showDigimons : false,
            digimons : []
        }
    }

    componentDidMount = async () =>{
        const digimons = await axios.get(`${this.state.serverLink}/digimons`)

        this.setState({
            showDigimons : true,
            digimons : digimons.data

        })
    }

    addToFavFunc = async (digimonData) =>{
        const digimons = await axios.post(`${this.state.serverLink}/addToFav`,digimonData)

        this.setState({
            digimons : digimons.data

        })

    }

    render() {
        return (
            <div>
                <h2>home page</h2>
                {this.state.showDigimons && 
                this.state.digimons.map(digimon=>{
                    return (
                        <Gigimon
                        digimon ={digimon}
                        addToFav = {this.addToFavFunc}

                        />

                    )
                })}
            </div>
        )
    }
}

export default Main;
