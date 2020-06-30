import React from 'react';


//Need ID, server ID, and farm ID to show API image
//Test: ID: "50059457732" server ID: "65535" farm ID: 66 secret: "27cd9fe95a"
const Photo = () => {
    return (
            <li>
                <img src="https://farm66.staticflickr.com/65535/50059457732_27cd9fe95a.jpg" alt="" />
            </li>
        )
    }

export default Photo;