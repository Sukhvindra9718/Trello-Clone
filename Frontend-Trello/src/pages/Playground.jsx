import React from 'react'
import { useLocation } from 'react-router-dom'
function Playground() {
    const { state } = useLocation();
    console.log(state)
    
  return (
    <div>Playground</div>
  )
}

export default Playground