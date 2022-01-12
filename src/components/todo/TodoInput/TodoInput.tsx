import React, { useState } from "react";
import { Container, Form, Input, Button } from "./TodoInput.style";
import { Action, ActionTypes } from "../../../reducers/todoReducer";

interface IProps {
  dispatch: React.Dispatch<Action>;
}

const TodoInput = ({ dispatch }: IProps) => {
  const [inputText, setInputText] = useState("");

  const addTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!inputText) {
      return;
    }
    dispatch({ type: ActionTypes.addTodo, payload: inputText });
    setInputText("");
  };
  return (
    <Container>
      <Form>
        <Input onChange={(e) => setInputText(e.target.value)} value={inputText} placeholder='Add new todo' />
        <Button onClick={addTodo}>Add Todo</Button>
      </Form>
    </Container>
  );
};

export default TodoInput;
