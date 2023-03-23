import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({ modal, toggle }) => {
  const [form, setForm] = useState({
    category: '',
    todos: '',
    dueDate: ''
  });

  const [viewTask, setViewTask] = useState(null);

  const handleSave = (e) => {
    e.preventDefault();
    setViewTask(form);
    toggle();
    setForm({
      category: '',
      todos: '',
      dueDate: ''
    });
  };

  const handleView = (e) => {
    e.preventDefault();
    setViewTask(form);
  };

  const closeModal = () => {
    setViewTask(null);
  };

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task - {form.dueDate}</ModalHeader>
        <ModalBody>
          <form>
            <div className='form-group'>
              <label>Category</label>
              <input
                type='text'
                className='form-control'
                value={form.category}
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value })
                }
                name='taskName'
              />
            </div>
            <div className='form-group'>
              <label>Tasks</label>
              <textarea
                rows='5'
                className='form-control'
                value={form.todos}
                onChange={(e) =>
                  setForm({ ...form, todos: e.target.value })
                }
                name='description'
              ></textarea>
            </div>
            <div className='form-group'>
              <label>Due-Date</label>
              <input
                type='date'
                className='form-control'
                value={form.dueDate}
                onChange={(e) =>
                  setForm({ ...form, dueDate: e.target.value })
                }
                name='dueDate'
              ></input>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={handleSave}>
            Create
          </Button>{' '}
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>{' '}
          <Button color='info' onClick={handleView}>
            View
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={viewTask !== null} toggle={closeModal}>
        <ModalHeader toggle={closeModal}>View Task</ModalHeader>
        <ModalBody>
          <p>Category: {viewTask?.category}</p>
          <p>Tasks: {viewTask?.todos}</p>
          <p>Due Date: {viewTask?.dueDate}</p>
        </ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={closeModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CreateTask;
