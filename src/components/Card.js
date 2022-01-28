import React from 'react';

import './Card.css';
import dots from '../images/icon-ellipsis.svg';

const Card = (props) => {
  const cardClass = 'card-' + props.title.toLowerCase().split(' ').join('');
  const classes = 'card ' + cardClass;

  const cardTitle = props.title;
  const cardTimeframes = props.timeframes;
  const currentHrs = cardTimeframes[props.selection].current;
  const previousHrs = cardTimeframes[props.selection].previous;

  return (
    <li>
      <div className={classes}>
        <div className="card__data">
          <div>
            <h2>{cardTitle}</h2>
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
