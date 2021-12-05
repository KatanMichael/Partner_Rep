import './App.css';
import Ifbl from './Pages/ifbl';
import {
BrowserRouter as Router,
Route,
Link,
Routes
} from 'react-router-dom'
import Home from './Pages/Home';
import ProvScreen from './Pages/prov';

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to = '/'>Home</Link>
            </li>
            <li>
            <Link to = '/ifbl'>IFBL</Link>
            </li>
            <li>
            <Link to = '/prov'>PROV</Link>
            </li>
          </ul>
        </nav>

</div>

       <Routes>
         <Route path = "/" element = {<Home />}/>
         <Route path = "/ifbl" element = {<Ifbl/>}/>
         <Route path = "/prov" element = {<ProvScreen/>}/>


       </Routes>

      
    </Router>
  )

  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
}

export default App;
