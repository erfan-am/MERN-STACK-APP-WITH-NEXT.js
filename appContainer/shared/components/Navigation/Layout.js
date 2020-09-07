import React from 'react'
import Header from './Header'
import NavLink from './NavLink'
import Link from 'next/link'
import styles from './Layout.module.css'
import  { AuthContex } from '../../context/contextApi'
export const Layout = (props) => {
    return (
        <React.Fragment> 
        <Header>
            <nav className={styles.navigation} >
            <h1 >
               <Link href="/">
                <a className={styles.a}>YourPlaces</a>
               </Link>
            </h1>
                   <AuthContex>
                   {({user})=> (<ul className={styles.navLinks}>
                            <NavLink path="/users" title="users" />
                           {user && <NavLink path="/1/places" title="MyPlaces" />}
                           {user && <NavLink path="/places/newplace" title="New Place" />}
                            <NavLink path="/auth" title="Authenticate" />
                        </ul>)
                            }
                   </AuthContex>
                   
            </nav>
        </Header>
        <main style={{margin:'100px auto'}}>
        {props.children}
        </main>
        
        </React.Fragment>
    )
}

export default Layout