import React from 'react';
// import { useState } from 'react';
// import {useEffect} from 'react';
import useFetch from './useFetch';
import BlogList from './BlogList';

const Home=()=>{

    // const [name, setName]=useState('mario');
    // const [age, setAge]=useState(25);

//     const handleClick=()=>{
//     setName('luigi');
//     setAge(30);
// }

// const handleAgain=(name,e)=>{
//     console.log(`hello ${name} , `, e.target);

// }



// const handleDelete=(id)=>{
//     const newBlogs= blogs.filter((blog)=> blog.id !==id)
//     setBlog(newBlogs);
// }



  const {data:blogs , isPending, error}=useFetch('https://json-server-111.herokuapp.com/blogs')

    return(
        <div className="home">
            {/* <h2>Homepage</h2>  */}
             
            {/* <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={(e)=>{handleAgain('mario',e)}}>Click me Again</button> */}
          {/* <BlogList blogs={blogs} title="All Blogs"  handleDelete={handleDelete}/> */}
          
         {/* {blogs && <BlogList blogs={blogs} title="Bayan Blogs" handleDelete={handleDelete}/>} */}
         {error && <div>{error}</div>}
         {isPending && <div>Loading.......</div>}
         {blogs && <BlogList blogs={blogs} title="Bayan Blogs" />}
        </div>
    );
}

export default Home;