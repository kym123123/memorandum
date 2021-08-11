import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import styled from 'styled-components';

const CountMemos = () => {
  return (
    <CountMemosContainer>
      <div className="count-text">
        {true ? (
          <>
            You have <span className="count-number">5</span> posts.
          </>
        ) : (
          <SkeletonTheme color="#e2dede19" highlightColor="#c0bdbd33">
            {/* today title */}
            <Skeleton count={1} duration={1} width={500} height={50} />
          </SkeletonTheme>
        )}
      </div>

      <img
        src="./assets/images/illur.svg"
        alt=""
        width="200"
        height="300"
        className="count-image"
      />
    </CountMemosContainer>
  );
};

export default CountMemos;

const CountMemosContainer = styled.div`
  margin-top: 2rem;
  .count-text {
    font-size: 4rem;
    font-weight: 500;
    color: #535050;
    .count-number {
      color: #e274ec;
      font-size: 4.5rem;
    }
  }
  .count-image {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`;
