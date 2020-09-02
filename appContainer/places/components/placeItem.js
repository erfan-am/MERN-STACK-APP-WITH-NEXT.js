import React, { useState } from 'react';
import Card from '../../shared/components/UIElement/Card';
import Button from '../../shared/components/formElement/Button';
import Modal from '../../shared/components/UIElement/Modal';


const PlaceItem = props => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          {/* <Map center={props.coordinates} zoom={16} /> */}
        </div>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler} >VIEW ON MAP</Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
      <style jsx>{`
      .place-item {
  margin: 1rem 0;
}

.place-item__content {
  padding: 0;
}

.place-item__info {
  padding: 1rem;
  text-align: center;
}

.place-item__image {
  width: 100%;
  height: 12.5rem;
  margin-right: 1.5rem;
}

.place-item__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.place-item__info h2,
.place-item__info h3,
.place-item__info p {
  margin: 0 0 0.5rem 0;
}

.place-item__actions {
  padding: 1rem;
  text-align: center;
  border-top: 1px solid #ccc;
}

.place-item__modal-content {
  padding: 0;
}

.place-item__modal-actions {
  text-align: right;
}

.place-item__actions button,
.place-item__actions a {
  margin: 0.5rem;
}

.map-container {
  height: 15rem;
  width: 100%;
}

@media (min-width: 768px) {
  .place-item__image {
    height: 20rem;
  } 
}
      `}</style>
    </React.Fragment>
  );
};

export default PlaceItem;
