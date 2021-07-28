import React from 'react'
import parse from 'html-react-parser';

const PageText = (props) => {
    console.log(`PageText ${props.block.id}`, props);
    return (
        <div>
            {parse(props.block.copy)}
        </div>
    );
}

export default PageText
