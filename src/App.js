import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './stores'
import Email from './components/Email';
import Name from './components/Name';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Name />
        <Email />
      </div>
    </Provider>
  );
}

export default App;
