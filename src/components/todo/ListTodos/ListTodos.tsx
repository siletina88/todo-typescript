import { ITodoItem, Action } from "../../../reducers/todoReducer";
import Todo from "../Todo";

interface IListTodosProps {
  todos: ITodoItem[];
  dispatch: React.Dispatch<Action>;
}

const ListTodos = ({ todos, dispatch }: IListTodosProps) => {
  return (
    <>
      {todos.map((todo: ITodoItem, idx: number) => (
        <Todo key={idx} todo={todo} idx={idx} dispatch={dispatch} />
      ))}
    </>
  );
};
export default ListTodos;
