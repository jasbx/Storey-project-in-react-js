import React, { useState } from "react";
import { toast } from "react-toastify";

const AddStorey = () => {
  const [NameAuthor, setName] = useState("");
  const [Title, setTitle] = useState("");
  const [Storey, setSubject] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const HandleBtn = () => {
    if (NameAuthor === "") return toast.error("name is requierd");
    if (Title === "") return toast.error("title is requierd");
    if (Storey === "") return toast.error("Storey is requierd");
    if (NameAuthor && Title && Storey != "")
      return toast.success("youre Storey Sending successfly ");
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    const myobjectApi = {
      NameAuthor: NameAuthor,
      Title: Title,
      Storey: Storey,
      desc: desc,
      date: date,
    };
    fetch("http://127.0.0.1:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myobjectApi),
    });
  };
  return (
    <div className="container  d-flex justify-content-center">
      <form onSubmit={HandleSubmit} className="form w-50 mt-5">
        <div className="m-5  bg-success rounded-1 text-center d-flex justify-content-center">
          <h3 className="mb-2 text-white fs-10 ">Add youre Storye</h3>
        </div>
        <div className="mb-3 mt-3">
          <label className="form-label">Name Auther</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Title Storey</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date </label>
          <input
            onChange={(e) => setDate(e.target.value)}
            type="date"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Describtion</label>
          <input
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Subject</label>

          <textarea
            onChange={(e) => setSubject(e.target.value)}
            className="form-control"
          ></textarea>
        </div>

        <button onClick={HandleBtn} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddStorey;
