
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Homepage from './Pages/Homepage';
import ChatPage from './Pages/ChatPage';


function App() {

  
  return (
    <div className="App">
      <Route path='/' component={Homepage} exact></Route>
      <Route path='/chats' component={ChatPage}></Route>
    </div>
  );
}

export default App;
