import styled from "styled-components"

export const StyledCircle = styled.div`
  width: 24rem;
  height: 24rem;
  position: relative;
  border-radius: 50%;
  margin: 5rem auto 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .center {
    background: blue;
    height: 15rem;
    width: 15rem;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    margin-left: 15px;
    margin-top: 15px;

    :hover {
      opacity: 0.5;
    }
  }
`
export const Item = styled.div`
  height: ${({ center }) => (center ? "20rem" : "5rem")};
  width: ${({ center }) => (center ? "20rem" : "5rem")};
  position: absolute;
  top: ${({ center }) => (center ? "18.5%" : "50%")};
  left: ${({ center }) => (center ? "18.5%" : "50%")};
  margin: -2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  transform: rotate(${({ position }) => position * 45}deg) translate(12rem)
    rotate(-${({ position }) => position * 45}deg);

  .content {
    background: grey;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    transition: 0.3s ease-in-out all;
    :hover {
      opacity: 0.5;
    }
  }
`
