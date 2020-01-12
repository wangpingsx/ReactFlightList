import React from 'react';

import Header from '../Header';

import STYLES from './App.scss';
import Itineraries from './models/Itineraries';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const App = () => (
  <div className={getClassName('App')}>
    <Header />
    <main className={getClassName('App__main')}>
      <Itineraries />
    </main>
  </div>
);

export default App;
