import React from 'react';
import styled from 'styled-components';
import { MdDateRange, MdSubtitles, MdContentPaste } from 'react-icons/md';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const EachMemo = () => {
  return (
    <>
      {true ? (
        <EachMemoContainer>
          <div className="date">
            <MdDateRange size={30} color={'rgba(231, 119, 231, 0.9)'} />
            January 21, 2021
          </div>
          <div className="title">
            <MdSubtitles size={30} color={'rgba(231, 119,231, 0.9)'} />
            paris travel plans
          </div>
          <div className="content">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur voluptatem ullam dignissimos recusandae eum porro vel
              illo aspernatur. Commodi ea quam iste nisi quibusdam sit tenetur
              porro nemo nesciunt aliquam.
            </span>
          </div>
        </EachMemoContainer>
      ) : (
        <>
          <SkeletonTheme color="#e2dede19" highlightColor="#c0bdbd33">
            {/* today title */}
            <Skeleton count={1} duration={1} width={500} height={50} />
          </SkeletonTheme>
          <SkeletonTheme color="#e2dede19" highlightColor="#c0bdbd33">
            {/* today title */}
            <Skeleton count={1} duration={1} width={500} height={50} />
          </SkeletonTheme>
          <SkeletonTheme color="#e2dede19" highlightColor="#c0bdbd33">
            {/* today title */}
            <Skeleton count={1} duration={1} width={500} height={50} />
          </SkeletonTheme>
        </>
      )}
    </>
  );
};

export default EachMemo;

const EachMemoContainer = styled.div`
  cursor: pointer;
  overflow: hidden;
  width: 30%;
  height: 100%;
  margin-right: 3.3%;
  margin-top: 2%;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  transition: 0.2s all;
  .date,
  .title {
    display: flex;
    align-items: center;
    font-size: 1.7rem;
    margin-bottom: 1.5rem;
  }
  .content {
    margin-top: 2rem;
    height: 10rem;
    overflow: hidden;
    span {
      font-size: 1.4rem;
    }
  }
  &:hover {
    transform: scale(1.15) rotate(5deg);
  }
`;
