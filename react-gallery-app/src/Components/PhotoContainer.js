import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


const PhotoContainer = props => {
    
    const results = props.data;
    let pics;

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

export default PhotoContainer;
