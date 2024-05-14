import React from 'react'
import TaskManagementFilter from './TaskManagementFilter'
import TaskManagementList from './TaskManagementList'

function TaskManagementBody() {
  return (
    <div>
      <TaskManagementFilter />
      <div>
        <TaskManagementList />
      </div>
    </div>
  )
}

export default TaskManagementBody