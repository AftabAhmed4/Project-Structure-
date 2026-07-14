"use client";

import { useEffect, useState } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};


export default function Home() {

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editId, setEditId] = useState<number | null>(null);


  // Load Local Storage
  useEffect(() => {

    const data = localStorage.getItem("todos");

    if(data){
      setTodos(JSON.parse(data));
    }

  }, []);



  // Save Local Storage
  useEffect(() => {

    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );

  }, [todos]);




  // Add / Update
  const saveTodo = () => {

    if(task.trim() === "") return;


    if(editId){

      setTodos(
        todos.map((todo)=>
          todo.id === editId
          ? {...todo,title:task}
          : todo
        )
      );

      setEditId(null);


    }else{


      const newTodo = {
        id:Date.now(),
        title:task,
        completed:false
      };


      setTodos([
        ...todos,
        newTodo
      ]);

    }


    setTask("");

  };





  // Edit
  const editTodo = (todo:Todo)=>{

    setTask(todo.title);
    setEditId(todo.id);

  };





  // Delete
  const deleteTodo = (id:number)=>{

    setTodos(
      todos.filter(
        todo=>todo.id !== id
      )
    );

  };





  // Complete
  const completeTodo = (id:number)=>{

    setTodos(
      todos.map(todo=>
        todo.id === id
        ? {
          ...todo,
          completed:!todo.completed
        }
        : todo
      )
    );

  };





  return (

    <main className="
      min-h-screen
      bg-gradient-to-br
      from-gray-950
      via-gray-900
      to-blue-950
      flex
      items-center
      justify-center
      p-5
    ">


      <div className="
        w-full
        max-w-xl
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        rounded-3xl
        shadow-2xl
        p-6
        text-white
      ">


        <h1 className="
          text-4xl
          font-bold
          text-center
          mb-8
        ">
          🚀 Todo App
        </h1>



        {/* Input */}

        <div className="flex gap-3">


          <input
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            placeholder="Write your task..."
            className="
              flex-1
              px-4
              py-3
              rounded-xl
              bg-white
              text-black
              outline-none
            "
          />


          <button
            onClick={saveTodo}
            className="
              bg-blue-600
              hover:bg-blue-700
              px-6
              rounded-xl
              font-semibold
              transition
            "
          >
            {
              editId
              ? "Update"
              : "Add"
            }
          </button>


        </div>





        {/* Todo List */}

        <div className="
          mt-8
          space-y-4
        ">


        {
          todos.length === 0 ? (

            <p className="
              text-center
              text-gray-300
            ">
              No tasks available
            </p>

          ):(

          todos.map(todo=>(


            <div
              key={todo.id}
              className="
                flex
                items-center
                justify-between
                bg-white/10
                border
                border-white/20
                rounded-xl
                p-4
              "
            >


              <div className="flex items-center gap-3">


                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={()=>completeTodo(todo.id)}
                  className="w-5 h-5"
                />


                <span
                  className={`
                    ${
                    todo.completed
                    ?
                    "line-through text-gray-400"
                    :
                    ""
                    }
                  `}
                >
                  {todo.title}
                </span>


              </div>



              <div className="flex gap-2">


                <button
                  onClick={()=>editTodo(todo)}
                  className="
                    bg-yellow-500
                    px-3
                    py-1
                    rounded-lg
                    text-black
                  "
                >
                  Edit
                </button>


                <button
                  onClick={()=>deleteTodo(todo.id)}
                  className="
                    bg-red-600
                    px-3
                    py-1
                    rounded-lg
                  "
                >
                  Delete
                </button>


              </div>


            </div>


          ))

          )
        }


        </div>



      </div>


    </main>

  );
}