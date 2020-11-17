import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  position: relative;
  font-size: 1.4rem;
  border: none;
  background: #2c3e50;
  color: white;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  padding: 5px 20px;
  transform: translateY(0px);

  &:hover {
    color: #2c3e50;
    background: white;
  }

  &:active {
    transform: translateY(5px);
  }

  &:focus {
    outline: none;
  }
`;
