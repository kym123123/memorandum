import LoginPage from 'pages/LoginPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Login" exact component={LoginPage} />
        <Route path="/" exact component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
