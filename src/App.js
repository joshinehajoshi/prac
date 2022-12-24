import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    console.log("data",data)
    setData(data);
  };

useEffect(() => {
  fetchData()
},[])

  return (
    <div className="App">
      <button 
      // onClick={btnHandler}
      >Click Me</button>
      <br />
      {
        data?.map((item) => {
          return (
            item?.postId
          )
        })
      }
    </div>
  );
}

export default App;
