import React from 'react';
import SearchForm from './SearchForm';

class App extends React.Component {

    onSearchSubmit = async (character) => {
        console.log(character);
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