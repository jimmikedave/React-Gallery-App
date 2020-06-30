import React from 'react';
import Photo from './Photo';


//in charge of how the list looks
//Need ID, server ID, farm ID, and sercret to show API image
const PhotoContainer = props => {

    const results = props.data;
    let pics = results.map(pic => 
        <Photo />    
    );

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                <Photo />
            </ul>
        </div>
        );
}

export default PhotoContainer;
