import React from 'react';
import styled from 'styled-components';

const index = () => {
  return (
    <ScheduleOuterContainer>
      <ScheduleInnerContainer>schedule</ScheduleInnerContainer>
    </ScheduleOuterContainer>
  );
};

export default index;

const ScheduleOuterContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem;
`;

const ScheduleInnerContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 2.5rem;
  width: 100%;
  height: 100%;
`;
