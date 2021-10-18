import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import JobDetail from './components/JobDetail';
import Search from './components/Search';

import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Search} />
     
     
    </BrowserRouter>
  );
}

export default App;