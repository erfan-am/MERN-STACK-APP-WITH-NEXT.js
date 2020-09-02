import React from 'react'
import Card from '../../shared/components/UIElement/Card';
import UserItem from './UserItem';
import styles from './UserList.module.css';
const UserList = (props) => {
        if (props.items.length === 0) {
          return (
            <div className="center">
              <Card>
                <h2>No users found.</h2>
              </Card>
            </div>
          );
        }
        return (
          <ul className={styles.users_list}>
            {props.items.map(user => (
              <UserItem
                key={user.id}
                id={user.id}
                image={user.image}
                name={user.name}
                placeCount={user.places}
              />
            ))}

            <style jsx>{`
         
            `}</style>
          </ul>
        );
}

export default UserList
