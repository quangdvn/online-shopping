/**
 * Style ProductCard with a react way
 */
import styled from "styled-components";

export const ProductCard = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.5s ease-in-out;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s ease-in-out;
  }

  &:hover {
    .card {
      border: 0.05px solid rgba(0, 0, 0, 0.2);
      box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }

  .card-img-top,
  .card-btn {
    transition: all 0.5s ease-in-out;
  }

  .img-container {
    position: relative;
    overflow: hidden;
    &:hover .card-img-top {
      transform: scale(1.2);
    }
    &:hover .card-btn {
      transform: translate(0, 0);
      transition: all 0.5s ease-in-out;
    }
  }

  .card-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.5rem;
    background-color: var(--lightBlue);
    color: var(--mainWhite);
    font-size: 1.4rem;
    border: none;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    &:focus {
      outline: none !important;
    }
    &:hover {
      color: var(--mainBlue);
      cursor: pointer;
    }
  }
`;
