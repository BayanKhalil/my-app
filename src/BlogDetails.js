import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";



const BlogDetails = () => {
    const {id} =useParams();
    const {data:blog, error, isPending}=useFetch('https://json-server-111.herokuapp.com/blogs/'+id);
    const history=useHistory();

      const handleClick=()=>{
          fetch('https://json-server-111.herokuapp.com/blogs/'+ blog.id,{
              method:'DELETE'

          }).then(()=>{
              history.push('/');
          })
      }



    return ( 
      
        <div className="blog-details">
            {/* <h2>Blog Details -{id}</h2> */}
            {error && <div> {error} </div>}
            {isPending && <div> Loading..... </div>}
            {blog && (
                <article>
                <h2>{ blog.title}</h2>
                <p>written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>delete</button>

                </article>
            )}

        </div>
     );
}
 
export default BlogDetails;