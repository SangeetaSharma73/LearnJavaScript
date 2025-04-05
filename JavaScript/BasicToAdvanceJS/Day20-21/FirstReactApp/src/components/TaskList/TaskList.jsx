import React from 'react'

const TaskList = ({type,id,checked}) => {
  return (
    <div className="task">
        <input type={type} id={id} checked={checked} />
        <label htmlFor={id}>{id}</label>
    </div>
  )
}
export default TaskList;