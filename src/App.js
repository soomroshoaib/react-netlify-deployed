import React , {useState, useEffect} from 'react';
import './App.css';

function App() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
   fetch(`/.netlify/functions/Hello?name=from 12345Serverless Function`)
   .then(res=> res.json())
   .then(data => setData(data))
   
  }, []);


  return ( 
    <div className="App">
      <header className="App-header">
        
          <h1>  {data.message}</h1>
      
      </header>
    </div>
  );
}

export default App;