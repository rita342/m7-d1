import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainSearch from './components/MainSearch';
import CompanySearchResults from './components/CompanySearchResults';
import { BrowserRouter, Route ,Link} from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import Favourites from './components/Favourites';

function App() {
  return (
    <Provider store = {store}>
    <BrowserRouter>
      <Route exact path='/' component={MainSearch} />
      <Route exact path='/ Favourites' component={Favourites} />
      <Route exact path='/:companyName' component={CompanySearchResults} />
    </BrowserRouter>
    </Provider>
  );
}

export default App;