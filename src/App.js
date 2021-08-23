import './features/chingqueue/styles/App.css';
import  Header from './features/chingqueue/components/header/header';
import MovieCarousel from './features/chingqueue/components/MovieCarousel';
import 'antd/dist/antd.css';



function App() {
  return (
    <div className="App">
      <Header/>
      <MovieCarousel></MovieCarousel>

    </div>
  );
}

export default App;
