import React from 'react';
import { useReducer, useState } from 'react';
import style from './style.module.css';

import Select from '../select/index';
import Summary from '../summary/index';

import { OPTIONS_SELECT } from '../../utils/index';

const AddJob = () => {

    const [formSubmit, setFormSubmit] = useState(false);
    const [enteredTypeJob, setEnteredTypeJob] = useState()

    const handleOptionsSelect = OPTIONS_SELECT.map((options) => {
        return(
            <option>{options}</option>
        );
    });

    const handleSubmit = () => {
        setFormSubmit(true);
    };

    const handleClick = () => {
        setFormSubmit(true);
    };

    const handleInputTypeJob = (event) => {
        // console.log(event, 'evento');
        setEnteredTypeJob(event.target.value);
        console.log(setEnteredTypeJob, 'input of type job');
    }

    return(
        <>
            <div className={style.cardForm}>
                <form onSubmit={handleSubmit} className={style.formItens}>
                    <div>
                        <label>Title: </label>
                        <input value={enteredTypeJob} onChange={handleInputTypeJob} type='text' placeholder='Título'/>
                        <label>Function: </label>
                        <input type='text' placeholder="Function" />
                        <label>Type (level): </label>
                        <Select options={handleOptionsSelect}/>
                        <button onClick={handleClick}>Clique aqui</button>
                    </div>
                    <div>
                        <Summary testando={formSubmit}/>   
                    </div>
                </form>
            </div>
        </>
    )
};

export default AddJob;