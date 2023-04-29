import React from 'react';
import style from './style.module.css';

import Select from '../select/index';
import Summary from '../summary/index';

import { OPTIONS_SELECT } from '../../utils/index';

const AddJob = () => {

    const handleOptionsSelect = OPTIONS_SELECT.map((options) => {
        return(
            <option>{options}</option>
        )
    })

    return(
        <>
            <div className={style.cardForm}>
                <form className={style.formItens}>
                    <div>
                        <label>Title: </label>
                        <input type='text' placeholder='Título'/>
                        <label>Function: </label>
                        <input type='text' placeholder="Function" />
                        <label>Type (level): </label>
                        <Select options={handleOptionsSelect}/>
                    </div>
                    <div>
                        <Summary />   
                    </div>
                </form>
            </div>
        </>
    )
};

export default AddJob;