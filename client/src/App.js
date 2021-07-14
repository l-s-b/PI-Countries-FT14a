import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from './redux/actions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries); // Mapping
  useEffect(() => { dispatch(getCountries) }, [dispatch])
  console.log(countries);
  return (
    <div className="App">
      <h1>Henry Countries</h1>
    </div>
  );
}

export default App;
