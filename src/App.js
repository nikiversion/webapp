import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './componant/Home';
import HeaderButton from './componant/HeaderButton';



function App() {
  return (
    <div>
    <BrowserRouter>
    <HeaderButton/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
