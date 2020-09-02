import React from 'react';
import styles from './Header.module.css';
const Header = ({children}) => {
    return (
        <header className={styles.mainHeader}>
            {children}
        </header>

    )
}

export default Header
