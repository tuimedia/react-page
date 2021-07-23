import React from 'react'

const Foo = (props) => {
    console.log(props);
    return (
        <div>
            {props.block.headline}
        </div>
    )
}

export default Foo
