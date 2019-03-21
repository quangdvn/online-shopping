/**
 * Style Logo with a react way
 */
import styled, { keyframes } from "styled-components";

const logoKeyFrames = keyframes`
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(180deg);
  }
  40% {
    transform: rotate(360deg);
  }
  60% {
    transform: rotate(0deg);
  }
  80% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LogoAnimate = styled.div`
  animation: ${logoKeyFrames} infinite 5s alternate-reverse;
`;
