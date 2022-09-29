import React, { useEffect, useState } from 'react';

const Offline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleOffline = () => {
    console.log('You are offline.');
    setIsOnline(false);
  };

  const handleOnline = () => {
    console.log('You are online.');
    setIsOnline(true);
  };

  useEffect(() => {
    console.log('mounted');
    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);
    return () => {
      console.log('umounted');
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  if (isOnline) {
    return <p>Všechno v pořádku</p>;
  }

  return <p>Jste offline!</p>;
};

export default Offline;
