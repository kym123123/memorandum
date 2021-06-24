import LoginPage from 'pages/LoginPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import MainPage from './pages/MainPage';
function App() {
  return (
    <RecoilRoot>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/" component={MainPage} />
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;
