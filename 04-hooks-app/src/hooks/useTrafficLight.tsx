import { useEffect, useState } from 'react';

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
};

type trafficLightColor = keyof typeof colors;

export const useTrafficLight = (color: trafficLightColor = 'red') => {
  const [ligtht, setLight] = useState<trafficLightColor>(color);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown === 0) return;

    const intervalId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countdown]);

  useEffect(() => {
    if (countdown > 0) return;

    setCountdown(5);
    if (ligtht === 'red') {
      setLight('green');
      return;
    }

    if (ligtht === 'green') {
      setLight('yellow');
      return;
    }

    if (ligtht === 'yellow') {
      setLight('red');
      return;
    }
  }, [countdown, ligtht]);

  return {
    countdown,
    percentage: (countdown / 5) * 100,
    redLight: ligtht === 'red' ? colors.red : 'bg-gray-500',
    greenLight: ligtht === 'green' ? colors.green : 'bg-gray-500',
    yellowLight: ligtht === 'yellow' ? colors.yellow : 'bg-gray-500',
  };
};
