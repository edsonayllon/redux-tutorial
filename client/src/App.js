import logo from './logo.svg';
import './App.css';
import { useCount } from 'hooks/useCount'
import { useSelector } from 'react-redux';

function App() {
  const count = useCount();
  const isLogged = useSelector(({ loggedReducer }) => loggedReducer);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          count: {count}
        </p>
        <p>
          { isLogged ? 'Logged in' : 'Logged off'}
        </p>
        <button>+</button>
        <button>-</button>
      </header>
    </div>
  );
}

export default App;
