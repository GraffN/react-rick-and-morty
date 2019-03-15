// imports
import React from 'react';

export default class CharacterComponent extends React.Component {
    render() {
        return (
            <div className="[ col-sm-4 ]">
                <div className="[ card ]">
                    <a href={'#/character-specfic/'+this.props.id} >
                        <div>
                            <img className="[ card--image ]" src={this.props.image} />
                        </div>
                        <div className="[ card--info ]">
                            <h3 className="[ card--info__center ]">{this.props.name}</h3>
                            <p><b>Species: </b>{this.props.species}</p>
                            <p><b>Status: </b>{this.props.status}</p>
                            <p><b>Gender: </b>{this.props.gender}</p>
                            <p><b>Location: </b>{this.props.location}</p>
                            <p><b>Place of origin: </b>{this.props.origin}</p>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}
