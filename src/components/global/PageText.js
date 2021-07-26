import React from 'react'
import parse from 'html-react-parser';

const PageText = (props) => {
    return (
        <div>
            {parse(props.block.copy)}
        </div>
    );
}

export default PageText
