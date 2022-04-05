
import './App.css';
import SideMenu from './sidemenu';
import { Route, Routes,BrowserRouter as Router} from 'react-router-dom'
import Menu from './menu';
import Home from './home';


function App() {
  return (
      <Router>
    <div className='container'>
      
      <SideMenu />
        <Routes>
          <Route exact path="/" element={Home()} />
          <Route path='/menu' element={Menu()} />
        </Routes>
    </div>
     </Router>
    
    );
}

export default App;
