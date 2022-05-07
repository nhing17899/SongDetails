import React from "react";
// only SongList under the Connect (to connect with Provider)
// we need to init 'connect' in this file
import { connect } from 'react-redux';
import { selectSong } from '../../actions/index';

class SongList extends React.Component {

    renderList() {
        return this.props.songList.map(song => {
            return (
                <div className='item' key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary" 
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>

                    <div className="content">
                        {song.title}
                    </div>
                </div>
            )
        })
    }
    render() {
        // console.log(this.props)
        return (
            <div className='ui divided list'>
                {this.renderList()}
            </div>
        )
    }
}

// name it by convention
// connect to Provider
const mapStateToProps = (state) => {
    return {songList: state.songList};
    // every time click the button SelectSong
    // state updated newly
}

// add Action into Connect func
// as Connect phase = map Provider + map Action
// Connect func ~ dispatch (create copies and operate)
export default connect(mapStateToProps, { selectSong })(SongList);

// // as connect() is defined like:
// // connect()
//     // return 
//         // function()
//             // return ...
// // we need to call connect()() to access the func inside

