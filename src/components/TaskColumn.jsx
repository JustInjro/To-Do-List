import React from 'react';
import "./Css/TaskColumn.css";
import TaskCard from './TaskCard';

const TaskColumn = ({title, icon, tasks, status, handleDelete}) => {
  const filteredTasks = tasks.filter(task => task.status === status);

  return (
    <section className='task_column'>
        <h2 className='task_column_heading'>
            <img className='task_column_icon' src={icon} alt="" /> {title}
        </h2>

        {filteredTasks.map((task, index) => (
          <TaskCard key={index} title={task.task} tags={task.tags} handleDelete={handleDelete} index={index}/>
        ))}
    </section>
  );
};

export default TaskColumn;
