import axios from 'axios';
import React from 'react';
import SearchForm from './SearchForm';
import Character from './Character';

class App extends React.Component {

    onSearchSubmit = async (character) => {
        const name = character.replace(' ', '+');
        const response = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${name}`);
        console.log(response);
    };

    render () {
        return (
            <div>
                <SearchForm onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;