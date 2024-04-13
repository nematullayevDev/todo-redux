import { MdOutlineDelete } from "react-icons/md";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const todoRef = useRef(null);
  const dispatach = useDispatch();
  const todo = useSelector((state) => state.todo.todo);

  const validate = () => {
    return true;
  };

  function hendleForm(e) {
    e.preventDefault();
    console.log(todoRef.current.value);

    const isValid = validate();

    if (isValid) {
      const todo = {
        todo: todoRef.current.value,
        id: Date.now(),
      };
      dispatach({ type: "USER_ADD", payload: todo });
      todoRef.current.value = null;
    }
  }

  function handleDelete(id) {
    let isDelete = confirm("Are you want delete?");
    if (isDelete) {
      dispatach({ type: "USER_DELETE", payload: id });
    }
  }

  return (
    <>
      <form
        onSubmit={hendleForm}
        className="w-1/2 mx-auto flex gap-[11px] mt-10"
      >
        <input
          className="text-[#777777] border-[2px] border-[#3E1671] w-full py-[10px] px-[15px] rounded-[10px]"
          type="text"
          ref={todoRef}
          placeholder="Add a new task"
        />
        <button className="bg-[#9E78CF] text-white font-bold text-[20p] p-[20px] rounded-lg">
          +
        </button>
      </form>

      <div className="w-1/2 mx-auto flex flex-col  mt-10">
        <span className="flex text-white text-justify ">
          <h1 className="text-[25px] font-normal  text-4xl">Tasks to do- </h1>
          <span className="text-[16px] font-normal text-4xl">0</span>
        </span>
        <ul className="w-full">
          {todo.length > 0 &&
            todo.map((todos, index) => {
              return (
                <li className="flex items-center gap-[140px] text-[#9E78CF] bg-[#1a1423]  h-[75px] justify-between rounded px-[23px] mt-[20px]">
                  <span className="text-[25px] font-normal  text-4xl">
                    {todos.todo}
                  </span>
                  <MdOutlineDelete
                    onClick={() => {
                      handleDelete(todos.id);
                    }}
                    className="text-4xl cursor-pointer"
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default App;
