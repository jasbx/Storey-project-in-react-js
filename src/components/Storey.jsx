import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Notfound from "./Notfound";

const Storey = () => {
  const [query,setQuery]=useState("")
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/",{cache:"force-cache"}
  )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
    
      <div className="text-center">
        <h3 className="text-badge">Storeyes</h3>
        <input class="input" onChange={(e)=>setQuery(e.target.value)} name="text" placeholder="Search..." type="search"/>
      </div>

     
       <div className="container storey mt-5  d-flex justify-content-between">

        
        {data.length ? (   data.filter(Title=>{
             return Title.Title.toLowerCase().includes(query.toLowerCase())
             }).map((item) => (
          <div key={item.id} class="card">
            <h3 class="card__title">{item.Title}</h3>
            <p class="card__content">{item.desc} </p>
            <div class="card__date">{item.date}</div>
            <div class="card__arrow">
              <Link to={`/storey/${item.id}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="15"
                  width="15"
                >
                  <path
                    fill="#fff"
                    d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                  ></path>
                </svg>
              </Link>
                  </div>
        </div>

        ))):(

          <Notfound/>
        )
        
        
     }
      
      
      </div>

    </>
    
  );
};

export default Storey;
