import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }
    
    render() {
        return <div className="ui divided list">{ this.renderList() }</div>
    };
}

//the argument is all data available in the redux store
const mapStateToProps = (state) => {
    //this.props === {songs: state.songs}
    return { songs: state.songs };
}

export default connect(
    mapStateToProps, 
    //makes the selectSong action available in props - connect actions creators to components
    { selectSong }
)(SongList);