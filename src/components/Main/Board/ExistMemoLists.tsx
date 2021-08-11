import React from 'react';
import styled from 'styled-components';
import EachMemo from './EachMemo';

const ExistMemoLists = () => {
  return (
    <ExistMemoListsContainer>
      <EachMemo />
      <EachMemo />
      <EachMemo />
      <EachMemo />
      <EachMemo />
      <EachMemo />
      <EachMemo />
    </ExistMemoListsContainer>
  );
};

export default ExistMemoLists;

const ExistMemoListsContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 24rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
`;
