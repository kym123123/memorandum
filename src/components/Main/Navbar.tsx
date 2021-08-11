import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BiNews } from 'react-icons/bi';
import { RiDashboardLine, RiHome4Line } from 'react-icons/ri';
import { GrLogout } from 'react-icons/gr';
import { BsCalendar } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isModalOpenState } from 'recoils/index';
import Portal from 'portal/index';
import LogoutModal from './LogoutModal';
import { useSelector } from 'react-redux';
import { RootStateType } from 'src/modules';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);
  const { category } = useSelector((state: RootStateType) => state.news);

  useEffect(() => {
    console.log(isModalOpen);
  }, [isModalOpen]);

  return (
    <>
      <NavbarContainer>
        <Link to="/">
          <li className="navbar-item home">
            <RiHome4Line
              size={25}
              className="home-icon navbar-icon"
              color="rgb(82,51,82)"
            />
            <div className="navbar-text">Home</div>
          </li>
        </Link>
        <Link to="/board">
          <li className="navbar-item note">
            <RiDashboardLine
              size={25}
              className="note-icon navbar-icon"
              color="rgb(82,51,82)"
            />
            <div className="navbar-text">Board</div>
          </li>
        </Link>
        <Link to={`/news/${category}`}>
          <li className="navbar-item home">
            <BiNews
              size={25}
              className="news-icon navbar-icon"
              color="rgb(82,51,82)"
            />
            <div className="navbar-text">News</div>
          </li>
        </Link>
        <Link to="/schedule">
          <li className="navbar-item calendar">
            <BsCalendar
              size={25}
              className="calendar-icon navbar-icon"
              color="rgb(82,51,82)"
            />
            <div className="navbar-text">Schedule</div>
          </li>
        </Link>
        <li className="navbar-item logout" onClick={() => setIsModalOpen(true)}>
          <GrLogout
            size={25}
            className="logout-icon navbar-icon"
            color="rgb(82,51,82)"
          />
          <div className="navbar-text">Logout</div>
        </li>
      </NavbarContainer>
      {/* <button
        onClick={async () => {
          const res = await test();

          try {
            console.log(res.data);
          } catch (e) {
            console.log(e);
          }
        }}
      >
        click
      </button> */}
      {isModalOpen && (
        <Portal>
          <LogoutModal />
        </Portal>
      )}
    </>
  );
};

const NavbarContainer = styled.ul`
  background-color: transparent;
  width: 100%;
  height: 40rem;
  margin-top: 4rem;
  a {
    text-decoration: none;
    color: rgb(82, 51, 82);
  }
  .navbar-item {
    cursor: pointer;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 1rem;
    margin-bottom: 0.5rem;
    transition-property: transform;
    transition-duration: 300ms;
    .navbar-icon {
      margin-right: 1.5rem;
    }
    .navbar-text {
      font-size: 1.7rem;
      font-weight: 300;
    }
    &:hover {
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(13px);
      -webkit-backdrop-filter: blur(13px);
      border-radius: 10px;
    }
    &:active {
      transform: scale(0.95);
    }
  }
  .logout {
    width: calc(100% - 3.5rem);
    position: absolute;
    bottom: 1rem;
  }
  @media screen and (max-width: 1110px) {
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: center;
    .navbar-item {
      width: 100%;
      margin-top: 2rem;
    }
    .navbar-item.logout {
      width: 10rem;
      position: static;
      height: 4.5rem;
    }
  }
  @media screen and (max-width: 700px) {
    .navbar-item {
      flex-direction: column;

      .navbar-text {
        font-size: 1.2rem;
      }
      .navbar-icon {
        margin-right: 0rem;
      }
    }
  }
`;
export default Navbar;
