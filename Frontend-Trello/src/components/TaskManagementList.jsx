import React from 'react'
import TaskManagementCard from './TaskManagementCard'
import AddNew from './AddNew'
function TaskManagementList() {
  return (
    <div>
      <div className='text-red'>
        TaskManagementList
      </div>
      <TaskManagementCard/>
      <AddNew/>
    </div>
  )
}

export default TaskManagementList