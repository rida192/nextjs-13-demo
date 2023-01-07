import { notFound } from "next/navigation";

export const dynamicParams = true;
const fetchTodo = async (todoId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );
  const todo = res.json();
  return todo;
};

const TodoId = async ({ params: { todoId } }) => {
  const todo = await fetchTodo(todoId);

  if (!todo.id) return notFound();
  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      <p className="border-t border-black text-right mt-5">
        By user: {todo.userId}
      </p>
    </div>
  );
};

export default TodoId;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos = await res.json();

  const trimidTodos = todos.splice(0, 10);

  return trimidTodos.map((todo) => ({ todoId: todo.id.toString() }));
}
