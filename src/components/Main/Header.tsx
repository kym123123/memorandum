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
  padding: 2rem 0 2rem 2rem;
  @media screen and (max-width: 1380px) {
    height: 100%;
  }
  @media screen and (max-width: 1110px) {
    width: 100%;
    height: 10rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    padding: 1rem 2rem;
  }
`;

const HeaderInnerContainer = styled.header`
  height: 100%;
  max-height: 100%;
  width: 24rem;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 2rem;
  padding: 2rem;
  position: relative;

  @media screen and (max-width: 1110px) {
    width: 100%;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
  @media screen and (max-width: 1110px) {
    position: absolute;
    top: 1rem;
    left: 2rem;
  }
`;

export default Header;
