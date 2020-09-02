import React, { useReducer, useCallback } from 'react'
import { INPUT_CHANGE_FORM } from '../../actionTypes';

const formReducer=(state, action) => {
    switch (action.type) {
        case INPUT_CHANGE_FORM:
            let formISvalid=true;
            for (const inputId in state.inputs){
                if(inputId=== action.inputId ){
                    formISvalid=formISvalid && action.isValid
                } else{
                    formISvalid=formISvalid && state.inputs[inputId].isValid
                }
            }
            return {
                ...state,
                inputs:{
                    ...state.inputs,
                    [action.inputId]:{value:action.value,isValid:action.isValid}
                },
                isValid:formISvalid
            }
        default:
            return state
    }
}
export const useForm=(initInput,initFormValid)=>{
    const [formState,dispatch]=useReducer(formReducer,{
        inputs:initInput,
        isValid:initFormValid
    })

    const inputHandler=useCallback((id,value,isValid)=>{
        dispatch({type:INPUT_CHANGE_FORM,inputId:id , value:value,isValid:isValid})
    },[])
    return [formState,inputHandler]
}