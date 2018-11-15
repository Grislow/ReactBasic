import React from 'react';
import './SearchBar.css';
class SearchBar extends React.Component {
    state = { term: ''};

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onTermSubmit(this.state.term);
    }

    onInputChange = (e) => {
        this.setState({ term: e.target.value});
    }

    render(){
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;