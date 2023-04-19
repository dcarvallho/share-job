import React from 'react';
import style from './style.module.css';

import Select from '../select/index';
import { OPTIONS_SELECT } from '../../utils/index';

const AddJob = () => {

    const handleOptionsSelect = OPTIONS_SELECT.map((options) => {
        return(
            <option>{options}</option>
        )
    })

    return(
        <div>
            <div className={style.cardForm}>
                <form>
                    <label>Title: </label>
                    <input type='text' placeholder='Título'/>
                    <label>Function: </label>
                    <input type='text' placeholder="Function" />
                    <label>Type (level): </label>
                    <Select options={handleOptionsSelect}/>
                </form>
            </div>
        </div>
    )
};

export default AddJob;