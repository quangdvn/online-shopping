/**
 * Style Button with a react way
 */
import styled from "styled-components";

export const BlueButton = styled.button`
  text-transform: capitalize;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  color: var(--lightBlue);
  border-radius: 5px;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
  }
  &:focus {
    outline: none !important;
  }
`;

/**
 * Extend the current button to make a new one
 */
export const YellowButton = styled(BlueButton)`
  color: var(--mainYellow);
  border-color: var(--mainYellow);
  &:hover {
    background: var(--mainYellow);
    color: var(--mainBlue);
  }
`;
