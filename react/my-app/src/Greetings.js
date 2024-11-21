import React from 'react';
import PropTypes from 'prop-types';
function Greetings({name,age}) {
    return (
    <div>
        <p>Hello, {name}</p>
        <p>Age: {age}</p>
    </div>
    );
}

Greetings.defaultProps = {
    name: 'Guest',
    age: 18
};

Greetings.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
};



export default Greetings;