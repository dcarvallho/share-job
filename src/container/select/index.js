import React from 'react';

const Select = (props) => {
    return(
        <>
            <select>
                {props.options}
            </select>
        </>
    )
}

export default Select;