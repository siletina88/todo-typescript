import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  background: white;
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.281);
  overflow: hidden;
  border-radius: 10px;
`;
export const CardBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
interface ISCProps {
  completed: boolean;
}
export const CardHeader = styled.div<ISCProps>`
  height: 40px;
  background: #5b828e;
  display: flex;
  padding-top: 5px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  opacity: ${(props) => (props.completed ? 0.3 : 1)};
  transition: opacity 0.4s ease;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Date = styled.p`
  color: #bbcfd7;
  font-size: 12px;
  font-style: italic;
`;
export const DateDesc = styled.p`
  color: white;
  font-size: 10px;
  font-style: italic;
  font-weight: 600;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;
export const TodoText = styled.p<ISCProps>`
  word-wrap: break-word;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  text-decoration: ${(props) => (props.completed ? "line-through" : "")};
  color: ${(props) => (props.completed ? "#4d8f639b" : "")};
`;
export const DeleteButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background: #ff0000b0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.4s ease;
  &:hover {
    background: crimson;
    transform: scale(1.2);
  }
`;
export const ToggleButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background: #14b814;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.4s ease;
  &:hover {
    background: green;
    transform: scale(1.2);
  }
`;
