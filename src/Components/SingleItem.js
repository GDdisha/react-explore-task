import React from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import "../../src/Singleitem.css";

const SingleItem = ({ ItemData, handleIncrement }) => {
  return (
    <div>
      <div className="card" key={ItemData.id}>
        <div className="card-image">
          <figure>
            <img src={ItemData.image} alt="" />
          </figure>
        </div>
        <div className="card-content">
          <Link to={`/detail/${ItemData.id}`}>{ItemData.name}</Link>
          <button className="button" onClick={() => handleIncrement(ItemData)}>
            <span>Add To Cart</span>
            <AddIcon style={{ color: "#fff", verticalAlign: "middle" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
