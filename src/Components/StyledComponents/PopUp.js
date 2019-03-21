/**
 * Style Pop Up with a react way
 */
import styled from "styled-components";

export const PopUpContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #pop-up {
    background: var(--mainWhite);
    border-radius: 10px;
  }
`;
