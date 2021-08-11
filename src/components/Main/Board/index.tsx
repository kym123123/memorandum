import React from 'react';
import Portal from 'src/portal';
import styled from 'styled-components';
import AddNew from './AddNew';
import CountMemos from './CountMemos';
import ExistMemoLists from './ExistMemoLists';
import SearchMemos from './SearchMemos';

const index = () => {
  return (
    <BoardOuterContainer>
      <BoardInnerContainer>
        {/* you have 3 memos */}
        <CountMemos />
        {/* search */}
        <SearchMemos />
        {/* add New */}
        <AddNew />
        {/* memo container */}
        <ExistMemoLists />

        {/* <Portal>
          <SelectedBoard />
        </Portal> */}
      </BoardInnerContainer>
    </BoardOuterContainer>
  );
};

const BoardOuterContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

const BoardInnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  overflow-y: scroll;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 2.5rem;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
`;

export default index;
