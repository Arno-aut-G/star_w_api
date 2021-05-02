import './App.css';
import Axios from 'axios'
import { useState, useEffect } from 'react'
import SwapiRouter from './swapiRouter'

function App() {
  const [data, setData] = useState([])
  const [category, setCategory] = useState('planets')
  const [loading, setLoading] = useState(true)

  const categories = ['films', 'people', 'planets', 'species', 'starships', 'vehicles']

  const fetchData = async () => {
    try {
      await Axios
        .get(`https://swapi.dev/api/${category}/`)
        .then(response => {
          setData(response.data.results)
          setLoading(false)
        })
    }

    catch (error) { console.log(error.message) }

  }

  useEffect(() =>
    fetchData()
    , [category])

  console.log(data)

  return (
    < div className="App" >
      <SwapiRouter
        categories={categories} setCategory={setCategory} data={data} loading={loading} />
    </div >
  );
}

export default App;
