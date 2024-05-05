import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Idpage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/id/${id}`);
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
 
   

 
  return (
    <div class="container-fluid mt-5">
      <div class="row justify-content-center">
        <div class="card bg-light p-3 rounded shadow-sm">
          <div class="card-body">
            <p class="text-muted">{data.NameAuthor}</p>
            <p class="text-muted">{data.date}</p>
            <div class="text-muted">
              <p class="text-sm bg-warning p-3 rounded">{data.Storey}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="bi bi-star-fill text-warning"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0l2.48 5.36 5.52.64-4 4.03.94 5.51L8 13.52 3.53 15.54l.94-5.51-4-4.03 5.52-.64L8 0z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="bi bi-star-fill text-warning"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0l2.48 5.36 5.52.64-4 4.03.94 5.51L8 13.52 3.53 15.54l.94-5.51-4-4.03 5.52-.64L8 0z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="bi bi-star-fill text-warning"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0l2.48 5.36 5.52.64-4 4.03.94 5.51L8 13.52 3.53 15.54l.94-5.51-4-4.03 5.52-.64L8 0z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="bi bi-star-fill text-warning"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0l2.48 5.36 5.52.64-4 4.03.94 5.51L8 13.52 3.53 15.54l.94-5.51-4-4.03 5.52-.64L8 0z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="bi bi-star-fill text-secondary"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0l2.48 5.36 5.52.64-4 4.03.94 5.51L8 13.52 3.53 15.54l.94-5.51-4-4.03 5.52-.64L8 0z" />
              </svg>
            </div>
          </div>
        </div>
      
      </div>
    
    </div>

  );
};

export default Idpage;
