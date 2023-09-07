// import Login from './components/Login';
import { useState } from "react";
import Signin from './components/Signin';
import Signup from "./components/Signup";


import './App.css'

const App = () => {
  const [currentForm, setCurrentForm] = useState('signin');
  const toggleForm = (fornName) => {
    setCurrentForm(fornName);
  }
  return (
    <main>
      <div className="main">
        <div className="gradient"></div>
      </div>
      <div className="app">
        {
          currentForm === 'signin' ? <Signin onFormSwitch={toggleForm}/> : <Signup onFormSwitch={toggleForm}/>
        }
      </div>
    </main>
  )
}

export default App