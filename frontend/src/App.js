import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Register from './pagers/Register';
import Login from './pagers/Login';
// import Dashbord from './pagers/Dashbord';
import Dboard from './pagers/Dboard';
import MainHome from './pagers/MainHome';
import NavigationBar from './pagers/NavigationBar';


function App() {
  return (
    <div >
      <BrowserRouter>
      <NavigationBar/>
        <Routes>
          <Route
            path="/Register"
            element={<Register/>}
            />
            <Route
            path='/Login'
            element={<Login/>}
            />
            <Route
            path='/Dboard'
            element={<Dboard/>}
            />
           <Route
           path='/'
           element={<MainHome/>}
           />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
