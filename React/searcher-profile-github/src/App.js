import Navbar from './Components/Navbar';
import { ContextProvider } from './Context';
import Routes from './routes';
import { Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <ContextProvider>
        <Routes />
      </ContextProvider>
    </div>
  );
}

export default App;
