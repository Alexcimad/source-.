import React, { Component} from 'react';

class SearchBar extends Component { // A stateful component needs to
    render(){
        return(
            <input type="text" className="form-control form-search" />
        )
    }
}

export default SearchBar;
