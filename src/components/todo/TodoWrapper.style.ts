import styled from "styled-components";
import { devices } from "../../styles/mediaQueries";

export const Container = styled.div`
  width: 100%;
`;
export const TodoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  width: 100%;
  gap: 30px;
  padding: 30px 20px;
  @media ${devices.laptopL} {
    padding: 30px 100px;
  }
`;
