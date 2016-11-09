import React from 'react';

const NotFound = ({location}) => {
    return (
        <div>
            <h2>Hiss! The following page cannot be found right meow: {location.pathname}</h2>
        </div>
    );
};

export default NotFound;
