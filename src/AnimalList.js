import React, { Component } from 'react';
import { getAnimals } from './fetch-utils';
import { Link } from 'react-router-dom';
import './Styles/animalList.css';

class AnimalList extends Component {
    state = { animals: [] };
    componentDidMount = async () => {
        const data = await getAnimals();
        this.setState({ animals: data });
    }
    render() { 
        return ( 
            <section className="animal-list">
                {this.state.animals.map((a) => (
                  <div className="cartoon-card" key={a.id}> 
                    <h2>
                        <Link to={`/animals/${a.id}`}>
                        {a.name}</Link>
                    </h2>
                    <img src={a.img} alt="the official in-game sprite for this animal" />
                    <p>Produces: {a.produces}</p>
                  </div>      
                ))}
            </section>
         );
    }
}
 
export default AnimalList;
