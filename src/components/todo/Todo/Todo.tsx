import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { IoCheckmarkCircleSharp, IoCheckmarkCircleOutline } from "react-icons/io5";
import { Action, ActionTypes } from "../../../reducers/todoReducer";
import { Card, CardBody, CardHeader, DateContainer, DateDesc, Date, TodoText, DeleteButton, ToggleButton, ButtonContainer } from "./Todo.style";

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
