import { useContext } from "react";
import { toast } from "react-toastify";
import { todocontext } from "../Wrapper";

const Read = () => {
  const [todos, settodos] = useContext(todocontext);

  const deleteFun = (data) => {
    const newtodos = todos.filter((d) => d.id !== data);
    settodos(newtodos);
    toast.error("Todo deleted!");
  };

  const deleteAll = () => {
    settodos([]);
    toast.error("All Todo deleted!");
  };

  const completeFun = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }

      return todo;
    });

    settodos(updatedTodos);
  };

  const renderTodos = todos.map((data) => {
    return (
      <li
        key={data.id}
        className="mb-2 overflow-auto flex flex-col sm:flex-row gap-3 sm:gap-[10px] justify-between items-start sm:items-center p-3 sm:p-4 bg-gray-900 rounded"
      >
        <span
          className={`text-base sm:text-lg md:text-xl font-thin break-words ${
            data.isCompleted ? "line-through text-gray-500" : ""
          }`}
        >
          {data.title}
        </span>
        <div className="flex gap-[10px] w-full sm:w-auto">
          <button
            className="font-thin border py-1 px-2 cursor-pointer flex-1 sm:flex-none text-sm sm:text-base hover:bg-white hover:text-gray-900 transition-colors"
            onClick={() => completeFun(data.id)}
          >
            {data.isCompleted ? "Uncheck" : "Check"}
          </button>
          <button
            className="font-thin text-red-500 py-1 px-2 cursor-pointer flex-1 sm:flex-none text-sm sm:text-base border border-red-500 hover:bg-red-500 hover:text-white transition-colors rounded"
            onClick={() => deleteFun(data.id)}
          >
            Delete
          </button>
        </div>
      </li>
    );
  });
  return (
    <div className="w-full md:w-[40%] text-white p-4 sm:p-6 md:p-10 overflow-auto">
      <h1 className="mb-6 sm:mb-8 md:mb-10 text-3xl sm:text-4xl md:text-5xl font-thin">
        <span className="text-blue-300">Pending</span> Todos
      </h1>
      <button
        onClick={deleteAll}
        className="mt-2 sm:mt-5 text-lg sm:text-xl px-5 py-2 border rounded cursor-pointer w-full mb-4 sm:mb-5 hover:bg-white hover:text-gray-900 transition-colors"
      >
        Delete All
      </button>

      <ol className="space-y-2">{renderTodos}</ol>
    </div>
  );
};

export default Read;