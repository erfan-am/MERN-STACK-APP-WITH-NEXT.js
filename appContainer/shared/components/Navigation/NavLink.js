import React from 'react';
import Link from 'next/link';
import styles from './NavLinks.module.css';
const NavLink = (props) => {
    return (
        <li className={styles.NavLink}>
            <Link href={props.path}><a className={styles.navLinkItem}>{props.title}</a></Link>
        </li>
    )
}

export default NavLink
