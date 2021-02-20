import React from "react";
import "./style.css";

function Details({ item }) {
  return (
    <div className="mydiv m-4">
      <div className="card m-4" style={{ width: "18rem" }}>
        <img src={item?.user?.avatar_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item?.user?.login}</h5>
          <p className="card-text">User Id : {item?.user?.id}</p>
        </div>
      </div>

      <div className="container text-left">
        <p className="text-left">{item?.body}</p>
      </div>
    </div>
  );
}

export default Details;
