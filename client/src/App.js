import logo from './logo.svg';
import './App.css';
import { useCount } from 'hooks/useCount'
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const count = useCount();
  const isLogged = useSelector(({ loggedReducer }) => loggedReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          count: {count}
        </p>
        <button onClick={ () => dispatch({ type: 'INCREMENT' }) }>+</button>
        <button onClick={ () => dispatch({ type: 'DECREMENT' }) }>-</button>
        <p>
          { isLogged ? 'Logged in' : 'Logged off'}
        </p>
      </header>
    </div>
  );
}

export default App;
