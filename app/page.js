'use client'

import { useState } from "react";

export default function Home() {
const [title, setTitle] = useState("")
const [desc, setDesc] = useState("")
const [mainTask, setMainTask] = useState([])

const submitHandler = (e) => {
  e.preventDefault()
  setMainTask([...mainTask, {title, desc}])
  setTitle("")
  setDesc("")
}
const deleteHandler = (i) => {
  let copyTask = [...mainTask]
  copyTask.splice(i,1)
  setMainTask(copyTask)
}

let renderTask = "No task available"
if (mainTask.length > 0){
  renderTask = mainTask.map((t,i)=> {
    return(
      <li key={i} className="flex items-center justify-between">
      <div className="flex items-center justify-between mb-5 w-2/3">
        <h5 className="text-2xl font-semibold">{t.title}</h5>
        <h6 className="text-2xl font-semibold">{t.desc}</h6>
      </div>
      <button onClick={() => deleteHandler(i)} className="bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
      </li>
    )
  })
}

  return (
    <>
      <h1 className="bg-black text-white font-bold text-center p-5 text-5xl">Farrukh's Todo List</h1>
    
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter todo title" value={title} onChange={(e)=> setTitle(e.target.value)}
        className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2" />
      <input type="text" placeholder="Enter Description" value={desc} onChange={(e)=> setDesc(e.target.value)}
        className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2" />
      <button className="bg-black text-white font-bold rounded px-4 py-3 text-2xl m-5">Add task</button>

      </form>
      <hr />

      <div className="p-8 bg-slate-200">
    <ul>
      {renderTask}
    </ul>
      </div>
      </>
  );
}
