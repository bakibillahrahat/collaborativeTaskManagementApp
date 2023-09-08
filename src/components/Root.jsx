import { Outlet } from 'react-router-dom';

import Signin from './Signin';
import Dashboard from '../container/Dashboard';




const Root = () => {
    const customSession = () => {
        const token = localStorage.getItem('token');
        if(!token === ''){
            return true
        }else{
            return false
        }
    }
    
  return (
    <main>
    <div className="main">
      <div className="gradient"></div>
    </div>
    <div className="app">
        <Outlet />
        {customSession === false ? <Signin/> : <Dashboard/>}
    </div>
  </main>
  )
}

export default Root