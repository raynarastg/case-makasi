import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserAndReposProvider } from './context/UserAndReposContext';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { globalStyles } from './stitches.config';

function App() {
  globalStyles();
  return (
    <BrowserRouter>
      <Switch>
        <UserAndReposProvider>
          <Route exact path="/" component={Home} />
          <Route exact path="/perfil/:username?" component={Profile} />
        </UserAndReposProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
