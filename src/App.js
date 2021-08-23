import './features/chingqueue/styles/App.css'
import UserLogin from './features/chingqueue/components/UserLogin'
import {Route, BrowserRouter, Switch } from 'react-router-dom';
import Index from './features/chingqueue/components/Index';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Switch>
           <Route exact path="/" component={Index}/>
           <Route exact path="/login" component={UserLogin}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
