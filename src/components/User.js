import React, { useState } from 'react';

import './User.css';
import user from '../images/image-jeremy.png';

const User = ({ selectedLink }) => {
  const [activeState, setSelectedCard] = useState('daily');

  const clickHandler = (event) => {
    const newSelection = event.target.name;

    if (activeState === newSelection) {
      return;
    }

    selectedLink(newSelection);
    setSelectedCard(newSelection);
  };

  return (
    <div className="card-user">
      <div className="card__user">
        <img src={user} alt="Jeremy" />
        <div>
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="card__selection">
        <ul>
          <li>
            <button
              name="daily"
              className={activeState === 'daily' ? 'current' : 'active'}
              onClick={clickHandler}
            >
              Daily
            </button>
          </li>
          <li>
            <button
              name="weekly"
              className={activeState === 'weekly' ? 'current' : 'active'}
              onClick={clickHandler}
            >
              Weekly
            </button>
          </li>
          <li>
            <button
              name="monthly"
              className={activeState === 'monthly' ? 'current' : 'active'}
              onClick={clickHandler}
            >
              Monthly
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default User;
