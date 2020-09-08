import React, { useState, useContext } from 'react'
import Layout from '../appContainer/shared/components/Navigation/Layout'
import Button from '../appContainer/shared/components/formElement/Button'
import { Context } from '../appContainer/shared/context/contextApi';
import { useRouter } from 'next/dist/client/router';

const auth = () => {
    const [text,setText]=useState({name:'',email:'',password:''});
    const onChange=e=>setText({...text,[e.target.name]:e.target.value});
    const auth=useContext(Context);
    const router=useRouter()
    const onSumitHandler=(e)=>{
       auth.logIn();
       router.push('/')
       e.preventDefault()
    }
    return (
        <Layout>
            <form onSubmit={onSumitHandler}>
             <input
                   type="text"
                   placeholder="name"
                   name="name"
                   onChange={onChange}
               />
                  <input
                   type="email"
                   placeholder="email"
                   name="email"
                   onChange={onChange}
               />
                  <input
                   type="password"
                   placeholder="password"
                   name="password"
                   onChange={onChange}
               />
               <Button type="button" onClick={onSumitHandler} >Login</Button>
            </form>            
        </Layout>
    )
}

export default auth
