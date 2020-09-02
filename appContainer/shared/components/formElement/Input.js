import React, { useReducer, useEffect } from 'react'
import { INPUT_CHANGE,INPUT_TOUCH } from '../../../actionTypes'
import styles from './input.module.css';
import { validate } from '../../utils/validators';
const inputReducer=(state , action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            return {
                ...state,
                value:action.val,
                isValid:validate(action.val,action.validators)
            }
        case INPUT_TOUCH:
          return {
            ...state,
            isTouched:true
          }
        default:
            return state
    }
}
const Input = (props) => {

    const [inputState,dispatch]=useReducer(inputReducer,{isValid:false,value:'',isTouched:false});

    const {isValid,value,id}=inputState;
    const {onInput}=props
    useEffect(()=>{
      onInput(id,value,isValid)
    },[onInput,id,isValid,value ])
    const changeHandler=e=>{
      dispatch({type:INPUT_CHANGE,val:e.target.value,validators:props.validators})
    };
    const touchHandler=()=>{
      dispatch({type:INPUT_TOUCH})
    }

    const element=props.element === "input" ? 
    (<input 
    id={props.id}
    type={props.type}
    onChange={changeHandler} 
    value={inputState.value}
    onBlur={touchHandler}
    placeholder={props.placeholder} />) :( 
    <textarea
        value={inputState.value}
        onBlur={touchHandler}
        row={props.row || 3}
        id={props.id}
        onChange={changeHandler}

    />)
    return (
        <div className={styles.form_control  , !inputState.isValid && inputState.isTouched && styles.form_control__invalid}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p> }
        </div>
    )
}

export default Input
