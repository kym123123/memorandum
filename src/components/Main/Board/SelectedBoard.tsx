import React from 'react';
import styled from 'styled-components';

const SelectedBoard = () => {
  return (
    <SelectedBoardOuterContainer>
      <SelectedBoardContainer>
        <BoardDots>
          <li className="dot dot-red"></li>
          <li className="dot dot-yellow"></li>
          <li className="dot dot-green"></li>
        </BoardDots>
        {/* 날짜 */}
        <div className="selected-board-date">January 21, 2021</div>
        {/* 제목, 그라디언트  */}
        <h2 className="selected-board-title">Learn design and code</h2>
        {/* 태그 */}
        <ul className="selected-board-tags">
          <li className="selected-board-tag"># 잡담</li>
          <li className="selected-board-tag"># 이름이 좀 긴 태그입니다.</li>
          <li className="selected-board-tag"># 이름이 좀 긴 태그입니다.</li>
          <li className="selected-board-tag"># 이름이 좀 긴 태그입니다.</li>
          <li className="selected-board-tag"># 이름이 좀 긴 태그입니다.</li>
          <li className="selected-board-tag"># 이름이 좀 긴 태그입니다.</li>
          <li className="selected-board-tag"># 이름이 좀 긴 태그입니다.</li>
          <li className="selected-board-tag"># 이름이 좀 긴 태그입니다.</li>
          <li className="selected-board-tag"># 이름이 좀 긴 태그입니다.</li>
          <li className="selected-board-tag"># 이름이 좀 긴 태그입니다.</li>
          <li className="selected-board-tag"># 이름이 좀 긴 태그입니다.</li>
          <li className="selected-board-tag"># 이름이 좀 긴 태그입니다.</li>
          <li className="selected-board-tag"># 이름이 좀 긴 태그입니다.</li>
          <li className="selected-board-tag"># 이름이 좀 긴 태그입니다.</li>
          <li className="selected-board-tag"># 이름이 좀 긴 태그입니다.</li>
          <li className="selected-board-tag"># 기타123123</li>
          <li className="selected-board-tag"># 기타123123</li>
          <li className="selected-board-tag"># 기타123123</li>
        </ul>
        {/* 본문 */}
        <p className="selected-board-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore id
          nihil optio eius at fuga et, nisi ullam, accusantium harum ea, sint
          iusto est nobis suscipit corporis debitis provident earum! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Mollitia minus facilis
          quibusdam tempore dolorum pariatur et rerum. Qui, numquam fugit nisi
          tempora repellat, voluptatibus totam, temporibus recusandae asperiores
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ullam
          quis ab unde. Sint veniam fugit unde ducimus, quisquam debitis nemo et
          molestias quod eos fuga excepturi ab omnis consequatur! Libero, neque
          necessitatibus tenetur ipsa quod illum corporis quidem accusantium
          debitis quibusdam, dolores nostrum perspiciatis error voluptatem
          sapiente quae quam dignissimos minima dolorum! Nisi quo autem tenetur
          eos esse cum. Sapiente, repudiandae cumque molestias inventore
          corrupti ipsa debitis ex ea, itaque, animi numquam error qui magni
          delectus sed est aut sequi facilis a ipsam atque ipsum ratione
          veritatis! Sint, harum! sit fuga?
        </p>
        {/* 닫기, 수정(저장) 버튼 */}
        <div className="buttons">
          <button className="save-btn selected-board-button">Save</button>
          <button className="close-btn selected-board-button">Close</button>
        </div>
      </SelectedBoardContainer>
    </SelectedBoardOuterContainer>
  );
};
const BoardDots = styled.ul`
  display: flex;
  justify-content: space-between;
  height: 2rem;
  width: 4.2rem;
  .dot {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
  .dot-red {
    background-color: rgba(255, 93, 79);
  }
  .dot-yellow {
    background-color: rgba(255, 198, 59);
  }
  .dot-green {
    background-color: rgba(55, 216, 166);
  }
`;
const SelectedBoardOuterContainer = styled.div`
  padding-bottom: 3rem;
`;

const SelectedBoardContainer = styled.article`
  @keyframes grow {
    0% {
      max-height: 0;
    }
    100% {
      max-height: 50rem;
    }
  }
  overflow-y: scroll;
  animation: grow 0.5s ease-in-out;
  width: 50%;
  max-height: 80%;
  min-width: 50rem;
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 2rem;
  padding: 2rem;

  .selected-board-date {
    color: #4e4c4c;
    font-size: 1.4rem;
    margin-bottom: 4rem;
  }
  .selected-board-title {
    font-size: 4rem;
    margin-bottom: 3rem;
    background: linear-gradient(to right, #bf27e6, #00f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 500;
  }
  .selected-board-description {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    line-height: 2.3rem;
  }
  .selected-board-tags {
    margin-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    .selected-board-tag {
      white-space: nowrap;
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
      padding: 1rem;
      font-size: 1.2rem;
      border: 1px solid #c973df;
      border-radius: 2rem;
      background: linear-gradient(to right, #c973df, #00f);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    .selected-board-button {
      cursor: pointer;
      padding: 0.7rem 1rem;
      border-radius: 2rem;
      border: 1px solid #c973df;
      color: #b847d4;
      font-weight: 500;
      font-size: 1.4rem;
      background-color: transparent;
      transition: 0.3s all;
      &:active {
        transform: scale(0.9);
      }
    }
    .save-btn {
      margin-right: 1.5rem;
    }
  }

  @media screen and (max-width: 1110px) {
    top: 55%;
    left: 50%;
    width: 60%;
    min-width: 30rem;
  }
`;

export default SelectedBoard;
