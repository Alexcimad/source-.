import React, { Component} from 'react';

class SearchBar extends Component { // A stateful component needs to
    constructor(props) { // be promoted into a class
        super(props);
        }  
    
    handleUpdate = (event) => {
        this.props.SearchFunction(event.target.value);
    }
    
    render(){
        return(
            <input type="text" className="form-control form-search" 
            onChange={this.handleUpdate}/>
        )
    }
}

export default SearchBar;
