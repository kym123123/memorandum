import styled from 'styled-components';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { RadioCheckType } from './types';

interface RadioBtnProps {
  btnType: RadioCheckType;
  isChecked: boolean;
  changeCheckedRadio: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    matcher: RadioCheckType,
  ) => void;
}

const RadioBtn = ({
  btnType,
  isChecked,
  changeCheckedRadio,
}: RadioBtnProps) => {
  return (
    <RadioBtnContainer onClick={(e) => changeCheckedRadio(e, btnType)}>
      {isChecked ? (
        <ImCheckboxChecked size={24} color={'#e274ec'} />
      ) : (
        <ImCheckboxUnchecked size={24} color={'#e274ec'} />
      )}
      <button>{btnType}</button>
    </RadioBtnContainer>
  );
};

export default RadioBtn;

const RadioBtnContainer = styled.li`
  & + & {
    margin-left: 2rem;
  }
  display: flex;
  cursor: pointer;
  button {
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
  }
`;
