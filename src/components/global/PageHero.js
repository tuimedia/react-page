import React from 'react'

const PageHero = (props) => {
    console.log('pageheros', props);
    return (
        <div>
            <h1>{props.block.title}</h1>
            <h3>{props.langData.title}</h3>
        </div>
    );
}

export default PageHero
