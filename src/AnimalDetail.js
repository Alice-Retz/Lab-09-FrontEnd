import React, { Component } from 'react';
import { getAnimal, getBuildings, updateAnimal } from './fetch-utils';
import classNames from 'classnames';
// import './Styles/App.css';

class AnimalDetail extends Component {
    state = { 
        id: 0, 
        name: '', 
        colors: '', 
        building: 0, 
        buildings: [],
        bought: true, 
        days_to_maturity: 0, 
        produces: '', 
        img: '', 
        message: '', 
        error: false, };
    
    componentDidMount = async () => {
        const animalId = this.props.match.params.id;
        const animalData = await getAnimal(animalId);
        const buildings = await getBuildings();
        this.setState({  
            id: animalData.id, 
            name: animalData.name, 
            colors: animalData.colors, 
            building: animalData.building_id,
            buildings,
            bought: animalData.bought, 
            days_to_maturity: animalData.days_to_maturity, 
            produces: animalData.produces, 
            img: animalData.img
             });
        console.log('state', this.state)
    };
    // getBuildingId = () => {
    //     const buildingObject = this.state.buildings.find(
    //         (build) => build.name === this.state.building
    //         );
    //         return buildingObject.id;
    // };
    handleClick = async (e) => {
        e.preventDefault();
        
        const animalData = {
            id: this.state.id,
            name: this.state.name,
            colors: this.state.colors,
            building_id: this.state.building,
            bought: this.state.bought,
            days_to_maturity: this.state.days_to_maturity,
            produces: this.state.produces,
            img: this.state.img,
        };
        console.log(animalData.building_id);

        const data = await updateAnimal(animalData);
        if (data.error) {
            this.setState({ message: data.error, error: true });
        } else {
            this.setState({ message: 'Animal Updated!', error: false });
            setTimeout(() => {
                this.setState({ message: '' });
            }, 2000);
        }
    };
   
    render() { 
        return ( 
            <>
                {this.state.message && (
                    <div 
                        className = {classNames({
                            message: true, 
                            error: this.state.error, 
                            success: !this.state.error,
                        })}
                    > {this.state.message} </div>
                )}

                <h1>{this.state.name}</h1>
                <img src={this.state.img} alt="cover" />
                <form id="update-animal">
                    <div className="form-group">
                        <label>Name: </label>
                        <input
                            onChange={(e) => {
                                this.setState({ name: e.target.value });
                            }}
                            type="text"
                            value={this.state.name}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Color Variants: </label>
                        <input
                            onChange={(e) => {
                                this.setState({ colors: e.target.value });
                            }}
                            type="number"
                            value={this.state.colors}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Building: </label>
                        <select
                            value={this.state.building}
                            onChange={ (e) => { this.setState({ building: e.target.value })}}
                        >
                            {this.state.buildings.map((build) => {
                                return (
                                    <option key={build.name} value={build.id}>{build.name}</option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Bought from Marine: </label>
                        <select
                            value={this.state.bought}
                            onChange={ async (e) => {
                                await this.setState({ bought: e.target.value });
                            }}
                        >
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                                );
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Days to maturity: </label>
                        <input
                            onChange={(e) => {
                                this.setState({ days_to_maturity: e.target.value });
                            }}
                            type="number"
                            value={this.state.days_to_maturity}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Produces: </label>
                        <input
                            onChange={(e) => {
                                this.setState({ produces: e.target.value });
                            }}
                            type="text"
                            value={this.state.produces}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Image URL: </label>
                        <input
                            onChange={(e) => {
                                this.setState({ img: e.target.value });
                            }}
                            type="text"
                            value={this.state.img}
                        ></input>
                    </div>
                    <button onClick={this.handleClick}>Update Info</button>
                </form>
          
            </>
         );
    }
}
 
export default AnimalDetail;