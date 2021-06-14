import React, { Component } from 'react';
import axios from 'axios';
import FavDigimon from './FavDigimon';
import UpdateForm from './UpdateForm';

class FavoriteDigimons extends Component {
    constructor (props){
        super(props);
        this.state = {
            serverLink : process.env.REACT_APP_SERVER,
            showDigimons : false,
            digimons : [],
            showForm :false,
            digimonName : '',
            digimonImg :'',
            digimonLevel : '',
            index : 0
        }
    }

    componentDidMount = async () =>{
        const digimons = await axios.get(`${this.state.serverLink}/getAdd`)

        this.setState({
            showDigimons : true,
            digimons : digimons.data

        })
    }
    delToFavFunc = async (index) =>{
        const name = this.state.digimons[index].name
    const digimons = await axios.delete(`${this.state.serverLink}/delToFav/${name}`)

    this.setState({
        digimons : digimons.data

    })
    }
    updateToShowForm = (idx) =>{
      const chosenDigimon = this.state.digimons[idx];
      this.setState({
        showForm :true,
        digimonName : chosenDigimon.name,
        digimonImg :chosenDigimon.img,
        digimonLevel : chosenDigimon.level,
        index : idx

      })
    }

    updateNameFunc = (e=>this.setState({digimonName:e.target.value}));
    updateImgeFunc = (e=>this.setState({digimonImg:e.target.value}));
    updateLevelFunc = (e=>this.setState({digimonLevel:e.target.value}));


    UpdateDigimon =  async(e)=>{
        e.preventDefault();
        const name = this.state.digimons[this.state.index].name
         const digimonData = {
             digimonName : this.state.digimonName,
             digimonImg : this.state.digimonImg,
             digimonLevel : this.state.digimonLevel

         }
        const digimonsUpdate = await axios.put(`${this.state.serverLink}/updateDigimon/${name}`,digimonData);

        this.setState({
            digimons : digimonsUpdate.data
    
        })

    }


    render() {
        return (
            <div>
                <h2>My Favorite</h2>
                {this.state.showForm && 
                <UpdateForm 
                digimonName = {this.state.digimonName}
                digimonImg = {this.state.digimonImg}
                digimonLevel = {this.state.digimonLevel}
                updateName = {this.updateNameFunc}
                updateImge = {this.updateImgeFunc}
                updateLevel = {this.updateLevelFunc}
                UpdateDigimon = {this.UpdateDigimon}
                />
                }
                {this.state.showDigimons &&
                this.state.digimons.map((digimon,idx)=>{
                    return(
                        <FavDigimon 
                        digimon = {digimon}
                        idx = {idx}
                        delToFav = {this.delToFavFunc}
                        updateToFav = {this.updateToShowForm}
                        />
                    )
                })
                }
            </div>
        )
    }
}

export default FavoriteDigimons;
