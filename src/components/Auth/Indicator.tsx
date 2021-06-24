import React from 'react';
import styled from 'styled-components';
import { GoCheck } from 'react-icons/go';

type IndicatorDivProps = {
  satisfied: boolean;
};

const IndicatorDiv = styled.div<IndicatorDivProps>`
  height: 2rem;
  line-height: 2.5rem;
  font-size: 1.1rem;
  text-align: center;
  font-weight: 600;
  color: ${(props) => (props.satisfied ? 'green' : 'red')};
`;

const Indicator = ({
  children,
  satisfied,
}: {
  children: string;
  satisfied: boolean;
}) => {
  return (
    <IndicatorDiv satisfied={satisfied}>
      {satisfied ? (
        <>
          <GoCheck /> {'All good!'}
        </>
      ) : (
        children
      )}
    </IndicatorDiv>
  );
};

export default Indicator;
