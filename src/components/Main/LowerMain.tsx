import React from 'react';
import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import { FaRegStickyNote } from 'react-icons/fa';
import { MdEventNote } from 'react-icons/md';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import Home from './Home';
import Memo from './Memo';

const LowerMain = () => {
  const history = useHistory();
  const match = useRouteMatch();

  console.log(history, match);
  console.log(match, 'match');

  return (
    <Router>
      <LowerMainContainer>
        {/* 하단 aside */}
        <Nav>
          <ul className="nav-menu">
            <li
              className="nav-menu-item"
              onClick={() => history.push(match.path + '/Home')}
            >
              <AiFillHome size={35} color="rgba(79, 31, 135, 0.77)" />
              <span>HOME</span>
            </li>
            <li
              className="nav-menu-item"
              onClick={() => history.push(match.path + '/Memo')}
            >
              <FaRegStickyNote size={35} color="rgba(79, 31, 135, 0.77)" />
              <span>MEMO</span>
            </li>
            <li className="nav-menu-item">
              <MdEventNote size={35} color="rgba(79, 31, 135, 0.77)" />
              <span>POST</span>
            </li>
          </ul>
        </Nav>
        {/* 하단 main */}
        <MainContainer>
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Memo" component={Memo} />
          </Switch>
        </MainContainer>
      </LowerMainContainer>
    </Router>
  );
};
const LowerMainContainer = styled.div`
  display: flex;
  @media screen and (max-width: 1210px) {
    flex-direction: column;
  }
`;

const Nav = styled.nav`
  background-color: #fefefe;
  width: 10%;
  height: 70rem;
  .nav-menu {
    display: flex;
    flex-wrap: wrap;
    .nav-menu-item {
      margin-bottom: 0.2rem;
      cursor: pointer;
      position: relative;
      width: 100%;
      height: 10rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      background: linear-gradient(
        90deg,
        rgba(242, 132, 220, 0.42200630252100846) 0%,
        rgba(238, 156, 43, 0.1783088235294118) 100%
      );

      span {
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
      &:first-child::before {
        content: '';
        display: inline-block;
        width: 0.7rem;
        height: 10rem;
        background-color: rgba(79, 31, 135, 0.77);
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
  @media screen and (max-width: 1210px) {
    background-color: blue;
  }
`;

const MainContainer = styled.main`
  /* background-color: grey; */
  width: 90%;
  height: 70rem;
`;

export default LowerMain;
