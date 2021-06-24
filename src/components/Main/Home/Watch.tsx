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
  width: 40rem;
  height: 25rem;
`;

const UpperContainer = styled.article`
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.55) 100%
  );

  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 3rem;
  height: 60%;
  padding: 2.5rem 3.5rem 3.5rem;
  position: relative;
  margin-bottom: 2rem;
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
    font-size: 2rem;
    color: #746f6f;
  }
`;

const LowerContainer = styled.article`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 3rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 40%;
  position: relative;
  padding-right: 2rem;
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
    font-weight: 500;
    font-size: 3rem;
    color: #3c3737;
  }
  .colon {
    font-weight: 300;
    font-size: 4rem;
    color: #3c3737;
  }
  .am-pm {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    color: #3c3737;
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export default Watch;
