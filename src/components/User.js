import React from 'react';

import './User.css';
import user from '../images/image-jeremy.png';

const User = () => {
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
            <a href="#">Daily</a>
          </li>
          <li>
            <a href="#">Weekly</a>
          </li>
          <li>
            <a href="#">Monthly</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default User;
