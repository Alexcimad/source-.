import React, { Component} from 'react';
import Gif from './gif.jsx'

class GifList extends Component { // A stateful component needs to  
    constructor(props) { // be promoted into a class
        super(props);
        }  
    render(){
        return (
            <div className="gif-list">
                {this.props.gifs.map(gif => {
                return <Gif id={gif.id} key={gif.id} updateGifSelected={this.props.updateGifSelected}/>
                })}
            </div>
        );
    }
}

export default GifList;
