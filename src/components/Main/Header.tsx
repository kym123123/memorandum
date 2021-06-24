import styled from 'styled-components';
import UserInfo from './UserInfo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <HeaderOuterContainer>
      <HeaderInnerContainer>
        <HeaderDots>
          <li className="dot dot-red"></li>
          <li className="dot dot-yellow"></li>
          <li className="dot dot-green"></li>
        </HeaderDots>
        {/* 유저 정보 */}
        <UserInfo />
        {/* nav bar 메뉴 */}
        <Navbar />
      </HeaderInnerContainer>
    </HeaderOuterContainer>
  );
};

const HeaderOuterContainer = styled.div`
  width: 30rem;
  height: 100vh;
  padding: 2rem 0 2rem 2rem;
`;

const HeaderInnerContainer = styled.header`
  height: 100%;
  width: 24rem;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 2rem;
  padding: 2rem;
  position: relative;
  animation: appear1 0.4s ease-in;
  @keyframes appear1 {
    0% {
      transform: translate(-100%, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

const HeaderDots = styled.ul`
  display: flex;
  justify-content: space-between;
  height: 2rem;
  width: 4.2rem;
  .dot {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: blue;
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

export default Header;
