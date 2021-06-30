import React from 'react';
import { VscRefresh } from 'react-icons/vsc';
import styled from 'styled-components';

interface ForeCastRefreshProps {
  refreshWeatherInfo: () => void;
}

const ForecastRefresh = ({ refreshWeatherInfo }: ForeCastRefreshProps) => {
  return (
    <ForecastRefreshContainer onClick={refreshWeatherInfo}>
      <VscRefresh size={13} color={'white'} />
    </ForecastRefreshContainer>
  );
};

const ForecastRefreshContainer = styled.div`
  position: absolute;
  top: 3rem;
  right: 3rem;
  cursor: pointer;
`;

export default ForecastRefresh;
