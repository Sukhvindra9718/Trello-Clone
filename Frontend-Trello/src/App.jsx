import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Signup1 from './pages/SignUpProcess/Signup1.jsx';
import Signup2 from './pages/SignUpProcess/Signup2.jsx';
import Signup3 from './pages/SignUpProcess/Signup3.jsx';
import Signup4 from './pages/SignUpProcess/Signup4.jsx';
import Signup5 from './pages/SignUpProcess/Signup5.jsx';
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
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signup/signup1" element={<Signup1/>}/>
        <Route path="/signup/signup2" element={<Signup2/>}/>
        <Route path="/signup/signup3" element={<Signup3/>}/>
        <Route path="/signup/signup4" element={<Signup4/>}/>
        <Route path="/signup/signup5" element={<Signup5/>}/>
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