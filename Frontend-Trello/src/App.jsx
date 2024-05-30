import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import SingUp from './pages/SingUp.jsx';
import Register from './pages/Register.jsx';
import NotFound from './pages/NotFound.jsx';
import ServerError from './pages/ServerError.jsx';
import Unauthorized from './pages/Unauthorized.jsx';
import TaskManagement from './pages/TaskManagement.jsx';
import Dashboard from './pages/Dashboard.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/login/singup" element={<SingUp/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/task-management" element={<TaskManagement />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/server-error" element={<ServerError />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// App