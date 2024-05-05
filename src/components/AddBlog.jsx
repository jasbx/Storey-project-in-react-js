import React, { useState } from "react";
import { toast } from "react-toastify";

const AddBlog = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [blog, setBlog] = useState("");
const HandleReset=()=>{
  setName("")
  setTitle("")
  setBlog("")

}

  const HandleSubmit = (e) => {
    e.preventDefault();
    const myobjectApi = {
   title:title,
    blog:blog,
    name:name,
    };
      
    
    fetch("http://127.0.0.1:8000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myobjectApi),
    });
    if (name === "") return toast.error("name is requierd");
    if (title === "") return toast.error("title is requierd");
    if (blog === "") return toast.error("blog is requierd");
    if (name && title && blog != "")
      return toast.success("youre blog Sending successfly ");
  
  }
  return (
    <div className="container d-flex justify-content-center">

<div class="form-container">
        <div class="form">
          <span class="heading">Write youre Blog</span>
          <input placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          type="text" class="input" />

          <input placeholder="title"
          value={title} 
          onChange={(e)=>setTitle(e.target.value)}
          id="title" type="text" class="input" />
          <textarea
          onChange={(e)=>setBlog(e.target.value)}
            placeholder="Enter youre blog..."
            rows="10"
            value={blog}
            cols="30"
            id="message"
            name="message"
            class="textarea"
          ></textarea>
 <button type="submit"  className="button" onClick={HandleSubmit}>
Send
</button>

              <button type={"reset"} className="button" onClick={HandleReset}>
                <div id="reset-btn" >
                  Reset
                </div>
              </button>
            </div>
          </div>
        </div>

  );
};

export default AddBlog;
