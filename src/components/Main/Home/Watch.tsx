import styled from 'styled-components';
import {
  addZeroToTimeunit,
  getDayName,
  getMonthName,
} from 'src/lib/utils/watchHelper';
import useGetTime from './useGetTime';

const Watch = () => {
  const time = useGetTime();

  return (
    <WatchContainer>
      <UpperContainer>
        {/* 몇년 */}
        <div className="year">{time.getFullYear()}</div>
        {/* 몇월 */}
        <div className="month">{getMonthName(time.getMonth())}</div>
        {/* 요일 */}
        <div className="day">{getDayName(time.getDay())}</div>
        {/* 몇일 */}
        <div className="date-container">
          <div className="date">{time.getDate() - 2}</div>
          <div className="date">{time.getDate() - 1}</div>
          <div className="date today">{time.getDate()}</div>
          <div className="date">{time.getDate() + 1}</div>
          <div className="date">{time.getDate() + 2}</div>
        </div>
      </UpperContainer>

      <LowerContainer>
        {/* 시 */}
        <div className="hour">{addZeroToTimeunit(time.getHours())}</div>
        {/* 분 */}
        <span className="colon">:</span>
        <div className="min">{addZeroToTimeunit(time.getMinutes())}</div>
        {/* 초 */}
        <span className="colon">:</span>
        <div className="sec">{addZeroToTimeunit(time.getSeconds())}</div>
        {/* pm am */}
        <div className="am-pm">{time.getHours() > 12 ? 'PM' : 'AM'}</div>
      </LowerContainer>
    </WatchContainer>
  );
};

const WatchContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1380px) {
    flex-direction: row;
    width: 100%;
  }
  @media screen and (max-width: 1100px) {
    flex-direction: row;
    width: 100%;
    height: 17rem;
  }
`;

const UpperContainer = styled.article`
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.55) 100%
  );
  font-weight: 300;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 3rem;
  height: 55%;
  padding: 2.5rem 3.5rem 3.5rem;
  position: relative;
  @media screen and (max-width: 1380px) {
    height: 90%;
    margin-right: 2rem;
  }
  .day {
    padding: 1rem;
    color: #9d6c6c;
    position: absolute;
    top: 1.5rem;
    right: 11rem;
    font-size: 1.8rem;
  }
  .year {
    font-size: 1.8rem;
    color: #796a6a;
    margin-bottom: 0.5rem;
  }
  .month {
    color: #413d3d;
    font-size: 3.3rem;
    margin-bottom: 1rem;
  }
  .date-container {
    display: flex;
    width: 30rem;
    margin-top: 0.2rem;
    align-items: center;
    justify-content: space-evenly;
    margin-left: -2.3rem;
  }
  .date.today {
    background: rgba(153, 77, 219, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 10px;
    font-size: 2.5rem;
    color: #413d3d;
  }
  .date {
    font-weight: 500;
    padding: 1rem;
    font-size: 1.8rem;
    color: #746f6f;
  }
  @media screen and (max-width: 1110px) {
    width: 100%;
    .date-container {
      width: 100%;
    }
    .day {
      top: 1.5rem;
      right: 1rem;
      font-size: 1.3rem;
    }
  }
`;

const LowerContainer = styled.article`
  font-weight: 300;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 1.8rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 40%;
  position: relative;
  .hour,
  .min,
  .sec {
    margin-top: 1rem;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.24);
    backdrop-filter: blur(19.5px);
    -webkit-backdrop-filter: blur(19.5px);
    border-radius: 10px;
    padding: 1rem;
    font-size: 3rem;
    color: #3c3737;
  }
  .colon {
    font-size: 4rem;
    color: #3c3737;
  }
  .am-pm {
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    color: #3c3737;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 1380px) {
    height: 90%;
    width: 100%;
    padding: 0 7rem;
    .hour,
    .min,
    .sec {
      min-width: 8rem;
      min-height: 8rem;
      text-align: center;
      line-height: 6rem;
      font-size: 4rem;
    }
    .colon {
      margin-right: 1rem;
      margin-left: 1rem;
    }
    .am-pm {
      top: 3rem;
      right: 4rem;
    }
  }
  @media screen and (max-width: 1110px) {
    padding: 0.5rem;
    .hour,
    .min,
    .sec {
      min-width: 4rem;
      min-height: 4rem;
      text-align: center;
      line-height: 3rem;
      font-size: 2rem;
    }
    .colon {
      margin-right: 1rem;
      margin-left: 1rem;
    }
    .am-pm {
      top: 2.5rem;
      right: 1rem;
    }
  }
`;

export default Watch;
