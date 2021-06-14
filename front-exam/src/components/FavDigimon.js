import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap/';

class FavDigimon extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }} key ={this.props.idx}>
            <Card.Img variant="top" src={this.props.digimon.img} />
            <Card.Body>
              <Card.Title>{this.props.digimon.name}</Card.Title>
              <Card.Text>
              {this.props.digimon.level}
              </Card.Text>
              <Button variant="primary" onClick={()=>this.props.delToFav(this.props.idx)}>Delete</Button>
              <Button variant="primary" onClick={()=>this.props.updateToFav(this.props.idx)}>Update</Button>
            </Card.Body>
          </Card>
        )
    }
}

export default FavDigimon;
