// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SearchPage from './Components/SearchPage';

function App() {
  return (
    <div className="App">
      <Router>

        <Header/>
        
        <Switch>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/">
              <Home/>
            </Route>

        </Switch>
        
        
        <Footer />
      </Router>
    </div>
    
  );
}

export default App;
