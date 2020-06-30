import React from 'react';
import Photo from './Photo';


//in charge of how the list looks
//Need ID, server ID, farm ID, and sercret to show API image
const PhotoContainer = props => {
    
    const results = props.data;
    let pics = results.map(pic => 
        <Photo data={pic} key={pic.id}/>    
    );
    
    

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
