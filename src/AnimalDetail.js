import React, { Component } from 'react';
import { getAnimal, getBuildings } from './fetch-utils';

class AnimalDetail extends Component {
    state = { id: 0, name: '', img: '', building: '', bought: '', days_to_maturity: 0, produces: '' }
    
    componentDidMount = async () => {
        const animalId = this.props.match.params.id;
        const animalData = await getAnimal(animalId);
        const buildings = await getBuildings()
        this.setState({ ...animalData, buildings });
    };
   
    render() { 
        return ( 
            <>
                <h1>This is a {this.state.name}</h1>
                <img src={this.state.img} alt="Official pixelated art of a farm animal. Sorry I can't be more descriptive, I don't know how to set individual alt text" />
            </>
         );
    }
}
 
export default AnimalDetail;