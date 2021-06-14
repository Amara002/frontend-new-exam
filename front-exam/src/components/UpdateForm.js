import React, { Component } from 'react'
class UpdateForm extends Component {
    render() {
        return (
            <>
             <form onSubmit={e=>this.props.UpdateDigimon(e)}>
                 <label>Name</label>
                 <input type='text' value={this.props.digimonName} onChange={this.props.updateName} />
                 <label>Name</label>
                 <input type='text' value={this.props.digimonImg} onChange={this.props.updateImge} />
                 <label>Name</label>
                 <input type='text' value={this.props.digimonLevel} onChange={this.props.updateLevel} />
                 <input type='submit' value = 'update form'  />
                 
                
                 </form>   
            </>
        )
    }
}

export default UpdateForm;
