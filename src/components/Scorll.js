import React from 'react'
import { tsPropertySignature } from '@babel/types';

const Scroll = (props) => {
    return (
        <div style={{ overflow: 'scroll', border: '1px solid black', height: '600px' }}>
            {props.children}
        </div>
    )
};

export default Scroll;