import React from 'react'
import Card from '../../shared/components/UIElement/Card'
import Link from 'next/link'
import Avatar from '../../shared/components/UIElement/Avatar';
import styles from './UserList.module.css'
const UserItem = (props) => {
    return (
        <li className={styles.user_item}>
        <Card className={styles.user_item__content}>
        <Link href={`/${props.id}/places`}>
           <div className={styles.flex}>
           <div className={styles.user_item__image}>
              <Avatar image={props.image} alt={props.name} />
            </div>
            <div className={styles.user_item__info}>
              <h2>{props.name}</h2>
              <h3>
                {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
              </h3>
            </div>
           </div>
        </Link>
        </Card>
      </li>
    )
}

export default UserItem
