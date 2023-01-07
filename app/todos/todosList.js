import Link from "next/link";

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");

  return res.json();
};

const TodosList = async () => {
  const todos = await fetchTodos();
  return (
    <div className="">
      {todos.map((todo) => (
        <p
          key={todo.id}
          className="bg-blue-200 p-2 rouded-sm text-center font-bold"
        >
          <Link href={`/todos/${todo.id}`}>Todo : {todo.id}</Link>
        </p>
      ))}
    </div>
  );
};

export default TodosList;
