import React from "react";
import styled from "styled-components";
import { devices } from "../styles/mediaQueries";

const Container = styled.div`
  background: #5b828e;
  width: 100%;
  height: 100px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2), 0px -5px 35px rgba(255, 255, 255, 0.3);
  font-size: 40px;
  letter-spacing: 3px;
  font-weight: bold;
  background: -webkit-linear-gradient(#fcfcfc, #e7e7e7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media ${devices.mobileS} {
    font-size: 20px;
  }
  @media ${devices.laptop} {
    font-size: 30px;
  }
`;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Todo APP with TypeScript</Title>
      </Wrapper>
    </Container>
  );
};

export default Header;
