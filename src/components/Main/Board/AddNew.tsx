import { FaPlus } from 'react-icons/fa';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import styled from 'styled-components';

const AddNew = () => {
  return (
    <AddNewContainer>
      {true ? (
        <>
          <button>
            <FaPlus color={'white'} size={30} />
            <span className="button-text">Add new</span>
          </button>
        </>
      ) : (
        <SkeletonTheme color="#e2dede19" highlightColor="#c0bdbd33">
          {/* today title */}
          <Skeleton count={1} duration={1} width={300} height={50} />
        </SkeletonTheme>
      )}
    </AddNewContainer>
  );
};

export default AddNew;

const AddNewContainer = styled.div`
  height: 5rem;
  margin-top: 2rem;
  button {
    cursor: pointer;
    padding: 0.5rem 2rem;
    background: rgba(231, 119, 231, 0.9);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border-radius: 10px;
    border: none;
    height: 100%;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    transition: 0.3s all;
    &:active {
      transform: scale(0.9);
    }
    .button-text {
      margin-left: 1rem;
      color: white;
      font-size: 2rem;
    }
  }
`;
