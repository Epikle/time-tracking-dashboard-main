import React, { useState } from 'react';

import TRACKING_DATA from './data/TrackingData';
import User from './components/User';
import Card from './components/Card';

import './app.css';



const App = () => {
  const [tracking, setTracking] = useState(TRACKING_DATA);
  const [linkSelection, setLinkSelection] = useState('daily');

  const linkHandler = (link) => {
    setLinkSelection(link);
  };

  return (
    <main>
      <section>
        <User selectedLink={linkHandler} />
        <ul>
          {tracking.map((cardData) => (
            <Card
              key={cardData.title}
              title={cardData.title}
              timeframes={cardData.timeframes}
              selection={linkSelection}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default App;
