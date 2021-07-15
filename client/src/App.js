import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from './redux/actions';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries); // Mapping
  useEffect(() => { dispatch(getCountries()) }, [dispatch])
  console.log(countries.map(c => <img src="c.flag"></img>));
  return (
    <div className="App">
      <NavBar />
      <h1>Henry Countries</h1>
      <div>{countries.map(c => <img src={c.flag} />)}</div>
      <Footer />
    </div>
  );

}

export default App;
