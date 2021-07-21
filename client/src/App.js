import "./css/App.css";
import "./css/NavBar.css";
import "./css/Footer.css";
import { Route } from "react-router";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LP from "./views/LP";
import Main from "./views/Main";
import AddActivity from "./views/AddActivity";
import AddCountry from "./views/AddCountry";
import Activities from "./views/Activities";
import CountryDetail from "./views/CountryDetail";

function App() {

  return (
    <div className='App'>
      <div className='wrap'>
      <NavBar />
      <Route exact path='/' component={ LP } />
      <Route exact path='/main' component={ Main } />
      <Route exact path='/activities' component={ Activities } />
      <Route exact path='/countries/:alpha3Code' component={ CountryDetail } />
      <Route exact path='/add-activity' component={ AddActivity } />
      <Route exact path='/add-country' component={ AddCountry } />
      </div>
      <Footer className='Footer' />
    </div>
  );
}

export default App;
