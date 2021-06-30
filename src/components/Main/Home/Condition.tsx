import React from 'react';
import styled from 'styled-components';

const Condition = () => {
  return <ConditionContainer>Condition</ConditionContainer>;
};

const ConditionContainer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 3rem;
  margin-top: 2.5rem;
  padding: 2rem;
  width: 36%;
  @media screen and (max-width: 1110px) {
    width: 100%;
    height: 10rem;
  }
`;

export default Condition;
