import React from 'react';

//Renders when 0 results are found
const NotFound = () => {
return (
    <li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li>
    )
}

export default NotFound;