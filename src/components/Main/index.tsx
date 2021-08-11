import styled from 'styled-components';
import Header from './Header';
import LowerMain from './LowerMain';

const Main = () => {
  return (
    <BackgroundContainer>
      {/* 배경안쪽 전체 컨테이너 */}
      <OuterContainer>
        {/* 상단 nav */}
        <Header />
        {/* 하단 전체 컨테이너 */}
        <LowerMain />
      </OuterContainer>
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
`;

const OuterContainer = styled.div`
  height: 90vh;
  max-height: 100rem;
  width: 100%;
  margin: 0 auto;
  border-radius: 1rem;
  background: rgba(230, 219, 233, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  overflow: hidden;
`;

export default Main;
