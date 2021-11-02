import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  posts: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        posts: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: "not good",
        posts: {},
      };
  }
};



function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res =>{
           dispatch({type:'FETCH_SUCCESS' , payload:res.data})
        }).catch(e=>{
            dispatch({type:'FETCH_ERROR'})
        })
    }, []);

  return <div>
      {state.loading ? 'Loading' : state.posts.title}
      {state.error ? state.error : null}
  </div>;
}

export default DataFetchingTwo;
