import React, { useState, useEffect } from 'react';

import Trip from './detail/Trip';

const getQoute = () =>
  fetch('/flights.json', {
    method: 'GET',
    headers: {
      'x-rapidapi-host':
        'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      'x-rapidapi-key': 'd6JAGS0GFYmshemJCMIyMTKDRPrYp16lfgojsn78WkeCMlw4Mt',
    },
  });

const Itineraries = () => {
  const [qoute, setQoute] = useState({});
  const [tripElements, setTripElements] = useState('');
  const [isLoading, setLoading] = useState(false);

  const reloadQoute = () => {
    setLoading(true);
    getQoute()
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setQoute(data);
        if (data.itineraries && data.legs) {
          setTripElements(data.itineraries.map((t) => {
                const legs = data.legs.filter(l => t.legs.indexOf(l.id) != -1);
                return <Trip key={t.id} trip={t} legs={legs}/>;
          }));
        }
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    reloadQoute();
  }, []);

  return (
    <div>
      {isLoading ? 'Loading...' : ''}
      {tripElements}
    </div>
  );
};
export default Itineraries;
