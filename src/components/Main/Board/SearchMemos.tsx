import styled from 'styled-components';
import RadioBtn from './RadioBtn';
import useRadioCheck from './useRadioCheck';
import { BiSearchAlt2 } from 'react-icons/bi';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SearchMemos = () => {
  const [radioCheck, changeCheckedRadio] = useRadioCheck('tag'); // 기본값 tag
  return (
    <SearchMemosContainer>
      {true ? (
        <>
          <ul className="radio-buttons">
            <RadioBtn
              btnType={'tag'}
              isChecked={radioCheck === 'tag'}
              changeCheckedRadio={changeCheckedRadio}
            />
            <RadioBtn
              btnType={'title'}
              isChecked={radioCheck === 'title'}
              changeCheckedRadio={changeCheckedRadio}
            />
            <RadioBtn
              btnType={'content'}
              isChecked={radioCheck === 'content'}
              changeCheckedRadio={changeCheckedRadio}
            />
          </ul>

          <div className="input-container">
            <input
              type="text"
              className="search-memo-input"
              placeholder={`Enter ${radioCheck} to search...`}
            />
            <button className="search-memo-button">
              <BiSearchAlt2 color="white" size={25} />
            </button>
          </div>
        </>
      ) : (
        <SkeletonTheme color="#e2dede19" highlightColor="#c0bdbd33">
          {/* today title */}
          <Skeleton count={1} duration={1} width={'100%'} height={100} />
        </SkeletonTheme>
      )}
    </SearchMemosContainer>
  );
};

export default SearchMemos;

const SearchMemosContainer = styled.form`
  width: 80%;
  max-width: 60rem;
  height: 15rem;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 2rem;
  margin-top: 2rem;
  padding: 3rem 3rem;
  .radio-buttons {
    display: flex;
  }
  .input-container {
    display: flex;
    align-items: center;
    margin-top: 2rem;
  }
  .search-memo-input {
    width: 50%;
    min-width: 30rem;
    height: 4rem;
    padding: 0.5rem;
    font-size: 1.5rem;
    border: 2px solid #e274ec;
    border-radius: 1rem;
    margin-right: 1rem;
    &:focus {
      outline: none;
    }
  }
  .search-memo-button {
    border: none;
    width: 5rem;
    height: 4rem;
    border-radius: 1rem;
    background-color: #e274ec;
  }
`;
