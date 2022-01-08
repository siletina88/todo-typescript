import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import Todo from "./Todo";
import TodoInput from "./TodoInput";
import { devices } from "../../styles/mediaQueries";
import moment from "moment";

const Container = styled.div`
  width: 100%;
`;
const TodoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  width: 100%;
  gap: 30px;
  padding: 30px 20px;

  @media ${devices.laptopL} {
    padding: 30px 100px;
  }
`;

interface IState {
  todos: { text: string; completed: boolean; createdAt: string }[];
}
interface ITodoItem {
  text: string;
  completed: boolean;
  createdAt: string;
  idx?: number;
}
export enum ActionTypes {
  addTodo,
  toggleTodo,
  deleteTodo,
}

export type Action = { type: ActionTypes.addTodo; payload: string } | { type: ActionTypes.deleteTodo; payload: number } | { type: ActionTypes.toggleTodo; payload: number };

const todoReducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case ActionTypes.addTodo:
      return {
        todos: [...state.todos, { text: action.payload, completed: false, createdAt: moment().format("llll") }],
      };
    case ActionTypes.deleteTodo:
      return {
        todos: state.todos.filter((todo: ITodoItem, idx: number) => idx !== action.payload),
      };
    case ActionTypes.toggleTodo:
      return {
        todos: state.todos.map((todo: ITodoItem, idx: number) => (idx === action.payload ? { ...todo, completed: !todo.completed } : todo)),
      };

    default:
      return state;
  }
};

const listTodos = (state: IState, dispatch: React.Dispatch<Action>) => {
  return state.todos.map((todo: ITodoItem, idx: number) => <Todo key={idx} todo={todo} idx={idx} dispatch={dispatch} />);
};

const TodoList = () => {
  const initialState = (item: string) => {
    if (JSON.parse(localStorage.getItem(item)!) == null) {
      return { todos: [] };
    }
    return JSON.parse(localStorage.getItem(item)!);
  };

  const [state, dispatch] = useReducer(todoReducer, initialState("todos"));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  return (
    <>
      <TodoInput dispatch={dispatch} />
      <Container>
        <TodoContainer>{listTodos(state, dispatch)}</TodoContainer>
      </Container>
    </>
  );
};

export default TodoList;
