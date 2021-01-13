import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardMaker from './components/cardMaker/cardMaker';
import Home from './components/home/home';

function App({ authService, imageService }) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home authService={authService} />
        </Route>
        <Route path="/maker">
          <CardMaker authService={authService} imageService={imageService}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
