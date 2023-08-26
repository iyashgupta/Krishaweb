import './App.css';
import Main from './main/main';
import { store } from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
   <Main />
   </Provider>
  );
}

export default App;
