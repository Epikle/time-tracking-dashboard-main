import React, {useState} from 'react';

import './User.css';
import user from '../images/image-jeremy.png';

const User = (props) => {

  const [isActiveDaily, setActiveDaily] = useState(true);
  const [isActiveWeekly, setActiveWeekly] = useState(false);
  const [isActiveMonthly, setActiveMonthly] = useState(false);

  const dailyClickHandler = (event) => {
    if (isActiveDaily) {
      return;
    };
    props.selectedLink(event.target.name);
    setActiveDaily(true);
    setActiveWeekly(false);
    setActiveMonthly(false);
  }

  const weeklyClickHandler = (event) => {
    if (isActiveWeekly) {
      return;
    };
    props.selectedLink(event.target.name);
    setActiveWeekly(true);
    setActiveDaily(false);
    setActiveMonthly(false);
  }

  const monthlyClickHandler = (event) => {
    if (isActiveMonthly) {
      return;
    };
    props.selectedLink(event.target.name);
    setActiveMonthly(true);
    setActiveDaily(false);
    setActiveWeekly(false);
  }

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
            <button name='daily' className={isActiveDaily ? 'current': 'active'} onClick={dailyClickHandler}>Daily</button>
          </li>
          <li>
            <button name='weekly' className={isActiveWeekly ? 'current': 'active'} onClick={weeklyClickHandler}>Weekly</button>
          </li>
          <li>
            <button name='monthly' className={isActiveMonthly ? 'current': 'active'} onClick={monthlyClickHandler}>Monthly</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default User;
