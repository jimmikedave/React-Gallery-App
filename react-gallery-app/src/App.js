import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import Nav from './navigation/Nav';
import PhotoContainer from './Components/PhotoContainer';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

const apiKey = process.env.REACT_APP_FLICKR_API_KEY;

// App component

class App extends Component {

  constructor() {
    super();
    this.state = {
      pics: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'sunsets') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pics: response.data.photos.photo,
          loading: false
          });
        })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container"> 
          <SearchForm onSearch={this.performSearch} />  
          <Nav />
          {
            (this.state.loading)
            ? <p>Loading...</p>
            : <PhotoContainer data={this.state.pics} />
          }
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
