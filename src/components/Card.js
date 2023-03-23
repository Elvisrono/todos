import React, { useState } from 'react';
import EditTask from '../modals/EditTask';
import '../../src/App.css';

const Card = ({ taskObj, handleNewPost, deleteTask, handleView }) => {
  const [modal, setModal] = useState(false);

  const colors = [
    {
      primaryColor: '#5D93E1',
      secondaryColor: '#ECF3FC',
    },
    {
      primaryColor: '#F9D288',
      secondaryColor: '#FEFAF1',
    },
    {
      primaryColor: '#5DC250',
      secondaryColor: '#F2FAF1',
    },
    {
      primaryColor: '#F48687',
      secondaryColor: '#FDF1F1',
    },
    {
      primaryColor: '#B964F7',
      secondaryColor: '#F3F0FD',
    },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const handleDelete = () => {
    console.warn('handleDelete not implemented');
    // deleteTask(taskObj.id);
  };

  return (
    <div className="card-wrapper mr-5">
      <div className="card-top" style={{ backgroundColor: colors[1 % 5].primaryColor }}></div>
      <div className="task-holder">
        <span className="card-header" style={{ backgroundColor: colors[4 % 5].secondaryColor, borderRadius: '10px' }}>
          {taskObj.category}
        </span>
        <div className="task-mt-3">{taskObj.todos}</div>
        <p>Due Date: {taskObj.dueDate ? taskObj.dueDate : 'No due date'}</p>
        <p1>Status: {taskObj.completed ? 'Completed' : 'Not Completed'} </p1>
        <div style={{ position: 'absolute', right: '20px', bottom: '20px' }}>
          <i
            className="far fa-edit mr-3"
            style={{ color: colors[19 % 5].primaryColor, cursor: 'pointer' }}
            onClick={() => setModal(true)}
          ></i>
          <i
            className="fas fa-trash-alt"
            onClick={handleDelete}
            style={{ color: colors[20 % 5].primaryColor, cursor: 'pointer' }}
          ></i>
          <i className="fas fa-eye" onClick={handleView} style={{ cursor: 'pointer' }}></i>
        </div>
    
      </div>
      <EditTask modal={modal} handleNewPost={handleNewPost} taskObj={taskObj} toggle={toggle} />
    </div>
  );
};

export default Card;
