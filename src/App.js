// import logo from './logo.svg';
// import './App.css';
// import * from '@mui/material'
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import StudentDetails from "./components/StudentDetails"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/signin" exact element={<SignIn />} />
        <Route path="/register" exact element={<SignUp />} />
        <Route path="/signed_in/student" exact element={<StudentDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

