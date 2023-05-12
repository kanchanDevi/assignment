import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {URL} from '../constant'

const Facts = () => {
    const [post, setPost]=useState(null);

    useEffect(() => {
        axios.get(URL).then((response) => {
          setPost(response.data);
        });
      }, []);

     

      if (!post) return null;

   
  return (
    <>
    <div className=" bg-slate-50 flex flex-col justify-center items-center h-[100vh] w-[100vw] p-5">
    <p className="p-2 text-xl">Fact: {post.fact}</p>
    <p className='p-2'>Length: {post.length}</p>
    <button onClick={() => window.location.reload(false)} className='bg-blue-600 p-4 rounded text-white weight-bold'>Click to reload!</button>
    </div>
    </>
  )
}

export default Facts