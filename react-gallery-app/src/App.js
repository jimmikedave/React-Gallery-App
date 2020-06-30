import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import config from './config.js';

const apiKey = process.env.REACT_APP_FLICKR_API_KEY;

class App extends Component {

  constructor() {
    super();
    this.state = {
      pics: []
    };
  }

  componentDidMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&per_page=24&format=json&nojsoncallback=1`)
  .then(response => {
    this.setState({
      pics: response.data.photos.photo
      })
    })
  .catch(error => {
    console.log('Error fetching and parsing data', error);
   });
  }

  performSearch = () => {

  }


  

  render() {
    //console.log(this.state.pics);
    return (
      <div className="container"> 
        <SearchForm />  
        <Nav />
        <PhotoContainer data={this.state.pics} />
      </div>
    );
  }
}

export default App;
