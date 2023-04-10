import React from 'react';
import './App.css';
import {useState} from 'react';

const App = () => {
  const [id, setId] = useState(0);
  const [toDos, setToDos] = useState([]);
  const [impFil, setImpFil] = useState(0);
  const onSubmit = (event) => {
    event.preventDefault();
    const newToDo = {id:id,name:event.target.name.value,content:event.target.content.value,imp:event.target.importance.value,due:event.target.due.value};
    setId(id+1);
    setToDos((toDos) => [newToDo, ...toDos]);
  };
  const deleteToDo = (event) => {
    setToDos(toDos.filter((toDo) => toDo.id !== parseInt(event.target.id)));
  };
  const toDoList = toDos.filter((toDo) => {
    if (impFil <= toDo.imp) return true;
    return false;
  }).map((toDo) => (
    <tr>
      <td>{toDo.name}</td>
      <td>{toDo.due}</td>
      <td>{toDo.content}</td>
      <td>{toDo.imp}</td>
      <td><button id={toDo.id} onClick={(event) => deleteToDo(event)}>Delete</button>
      </td>
    </tr>
  ));
  return (
    <div>
      <h1>To-do List</h1>
      <form onSubmit={onSubmit}> 
        <h3>Title</h3>
        <h3><input className="name" type="text" required placeholder="Write down the title" name="name"></input></h3>
        <h3>Due Date</h3>
        <h3><input className="Input Due" type="date" required name="due" ></input></h3>
        <h3>Content</h3>
        <h3><input className="Input Content" type="text" placeholder="내용" name="content"></input></h3>
        <h3>Importance</h3>
        <h3> <input type="range" name="importance" id="importance" min="0" max = "3" required></input></h3>
        <button type="submit">Add to To-do List</button>
      </form>
      <h4>Importance Filter <input type="range" name="importance-filter" id="importance-filter" min="0" max = "3" required onChange={(event) => { setImpFil(event.target.value); }}></input></h4>
      <table className="todoList">
        <thead>
          <tr>
            <th width="200px">To-do</th><th width="100px">Due Date</th><th width="300px">Content</th><th width="100px">Importance</th><th width="100px">Delete</th>
          </tr>
        </thead>
        <tbody>{toDoList}</tbody>
      </table>
    </div>
  );
};
export default App;