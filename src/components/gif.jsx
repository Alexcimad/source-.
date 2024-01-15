import React, { Component} from 'react';

class Gif extends Component { // A stateful component needs to  
    constructor(props) { // be promoted into a class
        super(props);
    }  
    
    UpdateGifFunc = () => {
        this.props.updateGifSelected(this.props.id);
    }
    render(){
        const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
        return(
            <img src={src} alt="" className="gif" onClick={this.UpdateGifFunc}/>
    );
    }
}

export default Gif;
