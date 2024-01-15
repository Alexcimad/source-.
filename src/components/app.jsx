import React, { Component} from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';

class App extends Component{
    constructor(props) { // be promoted into a class
        super(props);
        this.state = {
            gifs: [ 
                {id : "duNowzaVje6Di3hnOu"},
                {id : "kCz4A9YaIrw6diirfu"}],
            selectedGifId : "duNowzaVje6Di3hnOu"
        }; 
    } 
    
    updateGifSelected = (idSelected) => {
        this.setState({selectedGifId: idSelected});
    }

    search = (query) => {

        giphy('cYH37hCcBzqJK9RJaUj5GFWuuRjOfDEN').search({
            q: query,
            rating: 'g'
        }, 
        (err, res) => {
            // Res contains gif data!
            this.setState ({gifs: res.data});
        });
    }
    render(){
        return (
            <div>
                <div className="left-scene">
                    <SearchBar SearchFunction={this.search}/>
                    <div className="selected-gif">
                        <Gif id= {this.state.selectedGifId}/>
                    </div>
                </div>
                <div className="right-scene">
                    <GifList gifs={this.state.gifs} updateGifSelected = {this.updateGifSelected} />
                </div>               
            </div>
        )
    }
}

export default App;