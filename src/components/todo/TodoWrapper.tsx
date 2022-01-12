import ListTodos from "./ListTodos/";
import TodoInput from "./TodoInput/";
import { Container, TodoContainer } from "./TodoWrapper.style";
import useTodos from "../../reducers/todoReducer";

const TodoWrapper = () => {
  const [todos, dispatch] = useTodos();

  return (
    <>
      <TodoInput dispatch={dispatch} />
      <Container>
        <TodoContainer>
          <ListTodos todos={todos} dispatch={dispatch} />
        </TodoContainer>
      </Container>
    </>
  );
};

export default TodoWrapper;
