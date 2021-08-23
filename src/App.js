import './features/chingqueue/styles/App.css'
import UserLogin from './features/chingqueue/components/UserLogin'
import {Route, BrowserRouter, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Switch>
          <Route exact path="/login" component={UserLogin}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
