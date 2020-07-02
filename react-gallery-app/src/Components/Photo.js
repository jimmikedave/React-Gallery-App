import React from 'react';


//Need ID, server ID, and farm ID to show API image
//Test: ID: "50059457732" server ID: "65535" farm ID: 66 secret: "27cd9fe95a"
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