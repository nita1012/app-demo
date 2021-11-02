import axios from "axios";
import React, { useState, useEffect } from "react";

function FetchData() {
  const [post, setPost] = useState({});
  const [id, setId] = useState([1]);
  const [idFromButton,setIdFromButton]= useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [idFromButton]);

  const clickHandler = () =>{
    setIdFromButton(id)
  }
  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
      <button type="button" onClick={clickHandler}>fetch data</button>
      {post.title}
      {/* <ul>
                { */}

      {/* // post.map(post => (<li key={post.id}>{post.title}</li>)) */}
      {/* }
            </ul> */}
    </div>
  );
}

export default FetchData;
