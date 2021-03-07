import './SearchForm.css';
import React from 'react';

class SearchForm extends React.Component {
    state = { character: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        /* Aqui recogemos la funcion pasada por prop y le pasamos character como argumento */
        this.props.onSubmit(this.state.character);
    };

    render () {
        return (
            <div className="searchForm">
                <form className="formStyle" onSubmit={this.onFormSubmit}>
                    <label>Characters Search</label>
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