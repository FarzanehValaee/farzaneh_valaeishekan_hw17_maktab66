import React,{useState,useEffect} from 'react'
import axios from 'axios';

export default function FetchData(url) {
          const [data,setData]=useState("");
          const [loading,setLoading]=useState(false);
          const [error,setError]=useState("");
          useEffect(()=>{
                    setLoading(true);
                    axios
                    .get(url)
                    .then((response)=>{
                              setData(response.data);
                    })
                    .catch((error)=>{
                              setError(error);
                    })
                    .finally(()=>{
                              setLoading(false);
                    })
          },[url]);
}
