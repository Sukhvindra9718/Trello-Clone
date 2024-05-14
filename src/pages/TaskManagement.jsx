import React from 'react'
import TaskManagementSidebar from '../components/TaskManagementSidebar'
import TaskManagementHeader from '../components/TaskManagementHeader'
import TaskManagementBody from '../components/TaskManagementBody'

function TaskManagement() {
  return (
    <div>
        <TaskManagementHeader />
        <TaskManagementSidebar />
        <TaskManagementBody />
    </div>
  )
}

export default TaskManagement