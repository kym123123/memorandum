import { useCallback, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { currentPositionState } from 'src/recoils';

const useSetCurrPos = () => {
  const setCurrentPos = useSetRecoilState(currentPositionState);
  const refreshWeatherInfo = useCallback(() => {
    navigator.geolocation.getCurrentPosition(
      (pos: any) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        console.log(lat, lon);

        setCurrentPos({ lat, lon });
      },
      (e: any) => {
        console.log(e);
      },
    );
  }, []);

  useEffect(() => {
    refreshWeatherInfo();
  }, []);

  return { setCurrentPos, refreshWeatherInfo };
};

export default useSetCurrPos;
