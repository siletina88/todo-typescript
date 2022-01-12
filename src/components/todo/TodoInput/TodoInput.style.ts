import { devices } from "../../../styles/mediaQueries";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #bbcfd7;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media ${devices.mobileS} {
    width: 100%;
  }
`;

export const Input = styled.input`
  height: 40px;
  padding-left: 40px;
  background: white;
  border: none;
  border-radius: 10px;

  @media ${devices.mobileS} {
    font-size: 12px;
    width: 60%;
  }

  @media ${devices.tablet} {
    font-size: 16px;
    width: 40%;
  }
  @media ${devices.laptopL} {
    font-size: 18px;
    width: 30%;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  font-weight: bold;
  background: #5b828e;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  transition: color 0.3s ease, background 0.3s ease;
  &:hover {
    background: #5b828eab;
    color: white;
  }
  @media ${devices.mobileS} {
    width: 70px;
    font-size: 12px;
  }
  @media ${devices.tablet} {
    width: 100px;
    font-size: 12px;
  }
`;
