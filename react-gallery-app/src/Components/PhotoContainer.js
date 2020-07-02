import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Photo from './Photo';
import NotFound from './NotFound';


class PhotoContainer extends Component {
    
    //Updates the pics array if the tag has updated
    componentDidUpdate (prevProps) {
        const currentTag = this.props.match.params.query;
        const previousTag = prevProps.match.params.query;

        if (currentTag !== previousTag) {
            this.props.performSearch(currentTag)
        }
    };
    
    render () {

        const results = this.props.data;
        let pics;

        //Displays pics if found and NotFound renders if 0 results show
        if (results.length > 0) {
            pics = results.map(pic => <Photo data={pic} key={pic.id}/>);
        } else {
            pics = <NotFound />
        }

        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    {pics}
                </ul>
            </div>
            );
    }
}

export default withRouter (PhotoContainer)
