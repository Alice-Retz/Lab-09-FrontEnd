import React, { Component } from 'react';
import { createAnimal, getBuildings } from './fetch-utils.js';
import classNames from 'classnames';

class Create extends Component {
    state = { 
        name: '', 
        colors: '',
        building: 1, 
        buildings: [],
        bought: true, 
        days_to_maturity: '', 
        produces: '',
        img: '',
        error: false,
     }
    componentDidMount = async () => {
        const buildings = await getBuildings();
        this.setState({ buildings });
    };
    

    handleClick = async (e) => {
        e.preventDefault();
        const animalData = {
            name: this.state.name, 
            colors: this.state.colors,
            building_id: this.state.building, 
            bought: this.state.bought, 
            days_to_maturity: this.state.days_to_maturity, 
            produces: this.state.produces,
            img: this.state.img,
        };
        const data = await createAnimal(animalData);
        if (data.error) {
            this.setState({ message: data.error, error: true });
        } else {
            this.props.history.push('/');
        }
    };

    render() {
        return (
            <>
                {this.state.message && (
                    <div
                        className={classNames({
                            message: true,
                            error: this.state.error,
                            success: !this.state.error,
                        })}
                    > {this.state.message} </div>
                )}
                <h1>{this.state.name}</h1>
                <img src={this.state.img} alt="This is where the url you input will go." />
                <form id="update-animal">
                    <div className="form-group">
                        <label>Animal Type:</label>
                        <input onChange={(e) => {
                                this.setState({ name: e.target.value });
                            }}
                            type="text"
                            value={this.state.name}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Image URL: </label>
                        <input
                            onChange={(e) => {
                                this.setState({ img: e.target.value });
                            }}
                            type="text"
                            value={this.state.img}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Color Variants: </label>
                        <input
                            onChange={(e) => {
                                this.setState({
                                    colors: e.target.value,
                                });
                            }}
                            type="number"
                            value={this.state.colors}>
                        </input>
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
                        <label>Days to Maturity: </label>
                        <input
                            onChange={(e) => {
                                this.setState({
                                    days_to_maturity: e.target.value,
                                });
                            }}
                            type="number"
                            value={this.state.days_to_maturity}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Produces: </label>
                        <input
                            onChange={(e) => {
                                this.setState({ produces: e.target.value });
                            }}
                            type="text"
                            value={this.state.produces}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Building:</label>
                        <select
                            value={this.state.building}
                            onChange={(e) => {
                                this.setState({ building: e.target.value });
                            }}
                        >
                            {this.state.buildings.map((build) => {
                                return (
                                    <option key={build.name} value={build.id}>{build.name}</option>
                                );
                            })}
                        </select>
                    </div>
                    <button onClick={this.handleClick}>Enter New Animal</button>
                </form>
            </>
        );
    }
}
 
export default Create;