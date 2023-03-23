import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import CreateTask from '../modals/CreateTask';
import { useState } from 'react';
import Card from './Card';
import "../components/signup.css";
import "../components/todolist.css"

const ToDoList =({tasks, loggedIn, deleteTask, handleNewPost}) => {
    const [modal, setModal] = useState(false);

    const toggle =()=> {
        setModal(!modal);
    }
    {loggedIn.id && (
  <CreateTask
    modal={modal}
    toggle={toggle}
    loggedIn={loggedIn}
    handleNewPost={handleNewPost}
  />
)}

    

    

  

  return (
    <>
    
     <div className='header text-center'>
        <h1>Todo App</h1>
        <form></form>
        <button className="btn btn-primary mt-2" onClick={()=> setModal(true)}>Create Task</button>
        <div className = "logout-form">
        <a id='logout' href='/'>LogOut</a>
        </div>
        
    </div>
   
    <div className='task-container'>
       
        {tasks.map((obj) => <Card taskObj={obj} handleNewPost={handleNewPost} loggedIn={loggedIn} deleteTask={deleteTask} />)}
        
    </div> 
   
    
    <CreateTask toggle ={toggle} handleNewPost={handleNewPost} modal={modal} loggedIn={loggedIn}/>
    
     
    </>
     );
};


export default ToDoList;
