import React from 'react';
import style from './style.module.css'

const Select = (props) => {
    return(
        <>
            <select className={style.styleSelect}>
                {props.options}
            </select>
        </>
    )
}

export default Select;