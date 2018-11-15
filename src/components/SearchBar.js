import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''};

    //thx to arrow function this is bound to SearchBar
    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                    <label>
                        Image Search
                    </label>
                    {/* Create an 'onchange' event handler and pass it a function */}
                    <input 
                        type="text" 
                        value={this.state.term}
                        onChange={e => this.setState({ term: e.target.value})}
                    />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;