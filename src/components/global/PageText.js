import React from 'react'
import parse from 'html-react-parser';

const PageText = ({key, block, data: {copy}}) => {
    return (
        <div class={key}>
            {parse(copy)}
        </div>
    );
}

export default PageText
