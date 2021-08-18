import React, { Component } from 'react';
import { getAnimals } from './fetch-utils';
import { Link } from 'react-router-dom';

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
                    <h2>
                        <Link to={`/animals/${a.id}`}>
                        {a.name}</Link>
                    </h2>
                        
                ))}
            </section>
         );
    }
}
 
export default AnimalList;
