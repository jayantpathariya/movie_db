import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MoviePage from './pages/MoviePage';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies/:id" children={<MoviePage />} />
    </Switch>
  );
}

export default App;
