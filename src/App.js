import { Routes,Link,Route } from 'react-router-dom';
import './App.css';
import Home from './screen/Home'
import Login from './screen/Login'
import SignUp from './screen/SignUp'
import Cart from './screen/Cart'
import Notfound from './component/Notfound';
import Myorder from './screen/Myorder';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route exact path="/*" element={<Notfound/>}/>
        <Route exact path="/myorder" element={<Myorder/>}/>
      </Routes>
    </div>
  );
}

export default App;
