import React from "react";
import styled from "styled-components";
import { MdDeleteOutline } from "react-icons/md";
import { IoCheckmarkCircleSharp, IoCheckmarkCircleOutline } from "react-icons/io5";
import { ActionTypes } from "./TodoList";
import { Action } from "./TodoList";

const Card = styled.div`
  position: relative;
  background: white;
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.281);
  overflow: hidden;
  border-radius: 10px;
`;
const CardBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
interface ISCProps {
  completed: boolean;
}

const CardHeader = styled.div<ISCProps>`
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

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Date = styled.p`
  color: #bbcfd7;
  font-size: 12px;
  font-style: italic;
`;
const DateDesc = styled.p`
  color: white;
  font-size: 10px;
  font-style: italic;
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;
const TodoText = styled.p<ISCProps>`
  word-wrap: break-word;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  text-decoration: ${(props) => (props.completed ? "line-through" : "")};
  color: ${(props) => (props.completed ? "#4d8f639b" : "")};
`;
const DeleteButton = styled.button`
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
const ToggleButton = styled.button`
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

// type ArrowFunction = () => void;

interface IProps {
  todo: { text: string; completed: boolean; idx?: number; createdAt: string };
  idx: number;
  dispatch: React.Dispatch<Action>;
  // onClick: ArrowFunction;
}

const Todo = ({ todo, idx, dispatch }: IProps) => {
  return (
    <Card>
      <CardHeader completed={todo.completed}>
        <DateContainer>
          <DateDesc>Created :</DateDesc>
          <Date> {todo.createdAt}</Date>
        </DateContainer>

        <ButtonContainer>
          <ToggleButton>
            {todo.completed ? (
              <IoCheckmarkCircleOutline onClick={() => dispatch({ type: ActionTypes.toggleTodo, payload: idx })} style={{ fontSize: "20px" }} />
            ) : (
              <IoCheckmarkCircleSharp onClick={() => dispatch({ type: ActionTypes.toggleTodo, payload: idx })} style={{ fontSize: "20px" }} />
            )}
          </ToggleButton>
          <DeleteButton>
            <MdDeleteOutline onClick={() => dispatch({ type: ActionTypes.deleteTodo, payload: idx })} style={{ fontSize: "16px" }} />
          </DeleteButton>
        </ButtonContainer>
      </CardHeader>
      <CardBody>
        <TodoText completed={todo.completed}>{todo.text}</TodoText>
      </CardBody>
    </Card>
  );
};

export default Todo;
