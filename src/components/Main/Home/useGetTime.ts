import { useEffect, useState } from 'react';

const useGetTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const TimerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(TimerId);
  }, []);

  return time;
};

export default useGetTime;
