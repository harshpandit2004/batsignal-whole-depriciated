import React from 'react';

function ConditionalRendering(props) {
    return (
        <div>
            {props.something?<img src={require('../images/LBon.png')} />:<img src={require('../images/LBoff.png')} />}
        </div>
    );
}

export default ConditionalRendering;