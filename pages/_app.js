import {Context} from '../appContainer/shared/context/contextApi';
import { useState } from 'react';

 function MyApp(props){
   const [log,setLog]=useState(false)
    const { Component, pageProps } = props;
    return (
          <Context.Provider value={{
            log:log,
            logOut:()=>setLog(false),
            logIn:()=>setLog(true)
            }}>
            <Component {...pageProps} />
          </Context.Provider>
    );
}

export default MyApp;