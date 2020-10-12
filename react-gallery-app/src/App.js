import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//App Components
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';

//Import apiKey from .env
const apiKey = process.env.REACT_APP_FLICKR_API_KEY;

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

  //Fetches Flickr API and moves the data into the pics array
  performSearch = (query = 'Snowy Mountain') => {
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
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container"> 
          <SearchForm onSearch={this.performSearch} />  
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <PhotoContainer
              data={this.state.pics}
              performSearch={this.performSearch} />}
            />
            {/* The tag clicked will pass in the route path to the PhotoContainer via match */}
            <Route path="/:query" render={({ match }) => <PhotoContainer
              match={match}
              data={this.state.pics}
              performSearch={this.performSearch} /> }
            />
            <Route exact path="/search" render={() => <PhotoContainer
              data={this.state.pics}
              performSearch={this.performSearch} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
