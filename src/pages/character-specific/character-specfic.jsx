// imports
import React from 'react';
import CharacterSpecificComponent from './../../components/charachter-specific-component/Character-Specific-Component';

export default class CharacterSpecific extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            rickMortyObj: [],
            characterId: this.props.match.params.id
        }
    }

    componentDidMount(){
        const app = this;
        app.getData();
    }

    getData(){
        const app = this;
        fetch('https://rickandmortyapi.com/api/character/'+app.state.characterId)
        .then(response => {
            return response.json()
        })
        .then(result => {
            app.setState({
                rickMortyObj: result
            })

            console.log(result, 'result')
        });
    }

    render() {
        const app = this;
        let specificCharacter = <CharacterSpecificComponent image={app.state.rickMortyObj.image}
                                                            name={app.state.rickMortyObj.name}
                                                            species={app.state.rickMortyObj.species}
                                                            status={app.state.rickMortyObj.status}
                                                            gender={app.state.rickMortyObj.gender}
                                                            location={app.state.rickMortyObj.location}
                                                            origin={app.state.rickMortyObj.origin}
        >
        </CharacterSpecificComponent>;
        return (
                <div className="[ card row ]">
                    <div className="[ card--info ]">
                        {specificCharacter}
                    </div>
                </div>
        );
    }
}
