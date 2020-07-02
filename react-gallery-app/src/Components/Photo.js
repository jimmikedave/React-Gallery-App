import React from 'react';


//Displays photo based on photo id, server id, farm id, and secret id
const Photo = (props) => {

    const pic = props.data;
    const id = pic.id;
    const serverId = pic.server;
    const farmId = pic.farm;
    const secretId = pic.secret; 

    const url = `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secretId}.jpg`;

    return (
            <li>
                <img src={url} />
            </li>
        )
    }

export default Photo;