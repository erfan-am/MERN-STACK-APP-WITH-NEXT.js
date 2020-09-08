import React, { useContext } from 'react'
import Header from './Header'
import NavLink from './NavLink'
import Link from 'next/link'
import styles from './Layout.module.css'
import  { Context } from '../../context/contextApi'
import Button from '../formElement/Button'
export const Layout = (props) => {
    
    const auth=useContext(Context);
    return (
        <React.Fragment> 
        <Header>
            <nav className={styles.navigation} >
            <h1 >
               <Link href="/">
                <a className={styles.a}>YourPlaces</a>
              </Link>
            </h1>
                <ul className={styles.navLinks}>
                    {auth.log && <NavLink path="/users" title="users" />}
                    {auth.log && <NavLink path="/1/places" title="MyPlaces" />}
                    {auth.log &&  <NavLink path="/places/newplace" title="New Place" />}
                    {auth.log ?   <Button onClick={auth.logOut}>LOGOUT</Button> : <NavLink path="/auth" title="Authenticate" />}
                </ul>
            </nav>
        </Header>
        <main style={{margin:'100px auto'}}>
        {props.children}
        </main>
        
        </React.Fragment>
    )
}

export default Layout