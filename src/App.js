import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainSearch from './components/MainSearch';
import CompanySearchResults from './components/CompanySearchResults';
import Favorite from './components/Favorite';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={MainSearch} />
          <Route exact path='/favorite' component={Favorite} />
          <Route exact path='/:companyName' component={CompanySearchResults} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
