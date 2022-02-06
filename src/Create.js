import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


const Create = () => {
    
const [title,setTitle]=useState('');
const [body,setBody]=useState('');
const [author,setAuthor]=useState('');
const [isPending,setPending]=useState(false);
const history=useHistory();

const handleSubmit=(e)=>{
  e.preventDefault();

  const blog={title,body,author};
  setPending(true);

  fetch('https://json-server-111.herokuapp.com/blogs',{
    method: 'POST',
    headers:{"Content-Type": "application/json"},
    body:JSON.stringify(blog)
  }).then(()=>{
      console.log('new blog added');
       setPending(false);
       history.push('/')
  })
}
    
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>

            <form  onSubmit={ handleSubmit}>
              <label> Blog Title : </label>
              <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)} />

              <label> Blog Body</label>
              <textarea required value={body} onChange={ (e)=>setBody(e.target.value)}></textarea>

              <label> Blog Author :</label>
              <select value={author} onChange={ (e)=>setAuthor(e.target.value)}>
                  <option value="Bayan"> Bayan</option>
                  <option value="Tamara"> Tamara</option>
              </select>
              {!isPending &&<button>Add Blog</button>}
              {isPending &&<button disabled>Adding Blog ...</button>}
              {/* <p>{title}</p>
              <p>{body}</p>
              <p>{author}</p> */}
             </form>
        </div>
        

     );

     
}
 
export default Create;