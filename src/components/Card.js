import React from 'react';

import './Card.css';
import dots from '../images/icon-ellipsis.svg';

const Card = ({ title, timeframes, selection }) => {
  const cardClass = 'card-' + title.toLowerCase().split(' ').join('');
  const classes = 'card ' + cardClass;

  const { current: currentHrs, previous: previousHrs } = timeframes[selection];

  return (
    <li>
      <div className={classes}>
        <div className="card__data">
          <div>
            <h2>{title}</h2>
            <img src={dots} alt="More" />
          </div>
          <div>
            <p className="card__current">{currentHrs}hrs</p>
            <p className="card__previous">Previous - {previousHrs}hrs</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
