import React from 'react';

class SearchForm extends React.Component {
    state = { character: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.character);
    };

    render () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <label>Characters Search</label>
                    <br></br>
                    <input
                        type="text"
                        value={this.state.character}
                        onChange={(e) => {
                            this.setState({ character: e.target.value });
                        }}
                    />
                </form>
            </div>
        );
    }
};

export default SearchForm;