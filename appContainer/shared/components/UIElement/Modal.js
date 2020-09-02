import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './Backdrop';

const Modal = props => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : event => event.preventDefault()
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
      </CSSTransition>
      <style jsx>{`
      .modal {
  z-index: 100;
  position: fixed;
  top: 22vh;
  left: 10%;
  width: 80%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 8px;
}

.modal__header {
  width: 100%;
  padding: 1rem 0.5rem;
  background: #2a006e;
  color: white;
}

.modal__header h2 {
  margin: 0.5rem;
}

.modal__content {
  padding: 1rem 0.5rem;
}

.modal__footer {
  padding: 1rem 0.5rem;
}

@media (min-width: 768px) {
  .modal {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}

.modal-enter {
  transform: translateY(-10rem);
  opacity: 0;
}

.modal-enter-active {
  transform: translateY(0);
  opacity: 1;
  transition: all 200ms;
}

.modal-exit {
  transform: translateY(0);
  opacity: 1;
}

.modal-exit-active {
  transform: translateY(-10rem);
  opacity: 0;
  transition: all 200ms;
}

};
      `}</style>
    </React.Fragment>
  );
};

export default Modal;
