import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './componant/Home';
import HeaderButton from './componant/HeaderButton';
import QuizObject from './componant/QuizApp/QuizObject';



function App() {
  return (
    <div>
    <BrowserRouter>
    
    <HeaderButton/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/entquiz' element={<QuizObject/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
