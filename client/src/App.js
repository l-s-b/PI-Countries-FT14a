import "./App.css";
import NavBar from "./components/NavBar";
import { Route } from "react-router";
import Countries from "./components/Countries";
import Footer from "./components/Footer";
import CountryDetail from "./components/CountryDetail";
import { useParams } from 'react-router-dom';

function App() {

  return (
    <div classname='App'>
      <NavBar />
      <Route exact path='/' component={Countries} />
      <Route exact path={'/countries/:alpha3Code'} component={CountryDetail} />
      <Footer />
    </div>
  );
}

export default App;
