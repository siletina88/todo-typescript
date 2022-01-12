import moment from "moment";
import useReducerPersisted from "../customHooks/useReducerPersisted";

export type Action = { type: ActionTypes.addTodo; payload: string } | { type: ActionTypes.deleteTodo; payload: number } | { type: ActionTypes.toggleTodo; payload: number };

export interface IState {
  todos: { text: string; completed: boolean; createdAt: string }[];
}
export interface ITodoItem {
  text: string;
  completed: boolean;
  createdAt: string;
  idx?: number;
}
export enum ActionTypes {
  addTodo = "addTodo",
  toggleTodo = "toggleTodo",
  deleteTodo = "deleteTodo",
}

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

const useTodos = () => {
  const [{ todos }, dispatch] = useReducerPersisted(todoReducer, { todos: [] }, "todos");
  return [todos, dispatch] as [ITodoItem[], React.Dispatch<Action>];
};

export default useTodos;
