import './App.css';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import Routing from './routing';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routing />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
