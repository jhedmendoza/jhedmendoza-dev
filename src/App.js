import React, {useState} from 'react';
import axios from 'axios';

import './App.css';

function App() {

  axios.defaults.baseURL = 'https://api.dictionaryapi.dev/api/v2/entries';

  const [data, setData] = useState({
    search: ""
  }) 

  const [results, setResult] = useState('');

  const handleChange = (event) => {
    const newData = {...data}
    newData[event.target.id] = event.target.value
    setData(newData)
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    let textToSearch = data.search
    axios.get('en_US/'+textToSearch).then( res => 
      setResult(res.data)
    )
  };

  return (
   <div className="wrapper">
    <div className="featurette">
      <div className="featurette-inner text-center">
        <form className="search" onSubmit={(e)=> handleSubmit(e)}>
            <div className="input-group input-group-lg">
              <input type="text" id="search" placeholder="Type words in here" onChange={(e) => handleChange(e)} value={data.search} className="form-control" />
              <input className="btn btn-success btn-search" type="submit" value="Search" />
            </div>
        </form>
      </div>
  </div>
    {
      results.length ? results.map((value, index) => {
        console.log(value)
        return <div className="container container-meanings mb-3" key={index}>
                <div className="row">
                  <h2>
                  {value.word} 

                  { value.meanings.map((meanings, keymeanings) => 
                      <span className="part-of-speech" key={keymeanings}> {meanings.partOfSpeech}, </span> 
                  )}
                  
                  </h2>
                  <h4>{value.phonetic}</h4>
                  <p>{value.origin}</p>
                </div>
              </div>
      }) : ""
    }
  </div>  
  );
}

export default App;
