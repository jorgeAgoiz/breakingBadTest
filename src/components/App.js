import axios from 'axios';
import React from 'react';
import SearchForm from './SearchForm';
import Character from './Character';

class App extends React.Component {

    state = { character: [] };

    onSearchSubmit = async (character) => {
        const name = character.replace(' ', '+');
        const response = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${name}`);
        this.setState({ character: response.data });
        console.log(this.state.character);
    };

    render () {
        return (
            <div>
                <SearchForm onSubmit={this.onSearchSubmit} />
                <Character charac={this.state.character} />
            </div>
        );
    }
}

export default App;