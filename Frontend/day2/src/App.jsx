import {BrowserRouter} from 'react-router-dom';
//  import Home from './pages/Admin/User/Home';
    // import Login from './pages/Admin/User/Login';
  //  import Signup from './pages/Admin/User/Signup';
  // import LandingPage from './pages/Admin/User/LandingPage';
  import UserDetail from './pages/Admin/User/UserDetail';
const App = () => {
  return (
    <BrowserRouter>
        
           {/* <Login/>    */}
         {/* <Home />     */}
           {/* <LandingPage/> */}
             <UserDetail/>   
          {/* <Signup/>   */}
    </BrowserRouter>
  )
}

export default App