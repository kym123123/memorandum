import styled from 'styled-components';
import colors from 'lib/colors';

export const Button = styled.button`
  height: 4.5rem;
  width: 100%;
  border-radius: 4.5rem;
  outline: 0;
  border: none;
  color: #fefefe;
  background: ${colors.buttonBackgroundColor};
  transition: all 0.3s;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
  &:disabled {
    background: lightgray;
    cursor: not-allowed;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 4.2rem;
  border: 0;
  background-color: lightgray;
  border-radius: 1.8rem;
  padding: 0.5rem 0.5rem 0.5rem 2.6rem;
  &::placeholder {
    color: gray;
  }
  &:active,
  &:focus {
    outline: none;
  }
`;
