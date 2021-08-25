import './features/chingqueue/styles/App.css'
import {Route, BrowserRouter, Switch } from 'react-router-dom';
import Index from './features/chingqueue/components/Index';
import 'antd/dist/antd.css';
import MovieDetail from './features/chingqueue/components/MovieDetail';
import MovieSchedule from './features/chingqueue/components/MovieSchedule';
import UserLogin from './features/chingqueue/components/UserLogin';
import ShowSeats from './features/chingqueue/components/ShowSeats';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Switch>
           <Route exact path="/" component={Index}/>
           <Route exact path="/login" component={UserLogin}/>
           <Route exact path="/MovieDetails" component={MovieDetail}></Route>
           <Route exact path="/MovieSchedule" component={MovieSchedule}></Route>
           <Route exact path="/ShowSeats" component={ShowSeats}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
