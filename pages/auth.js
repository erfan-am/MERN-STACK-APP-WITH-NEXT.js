import React, { useState, useContext } from 'react'
import Layout from '../appContainer/shared/components/Navigation/Layout'
import Button from '../appContainer/shared/components/formElement/Button'
import { AuthContex } from '../appContainer/shared/context/contextApi';
import { useRouter } from 'next/dist/client/router';

const auth = () => {
    const [text,setText]=useState({name:'',email:'',password:''});
    const onChange=e=>setText({...text,[e.target.name]:e.target.value});
    const router=useRouter()
    return (
        <Layout>
        <AuthContex>
            {({user,loggedin})=>(
            <form >
               {user && <input
                   type="text"
                   placeholder="name"
                   name="name"
                   onChange={onChange}
               />}
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
               {user ? <Button type="button">Login</Button> :<Button type="button" onClick={()=>{
                   loggedin();
                   router.push("/")
                   }}>Signup</Button>}
            </form>
            )}
        </AuthContex>
            
        </Layout>
    )
}

export default auth
