import { React } from "react";
import { useParams, Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ItemData from "./Data";
import "../../src/Detail.css";

const Detail = () => {
  const { id } = useParams();
  let blog = ItemData.find((blog) => blog.id === id);
  //console.log(blog);

  return (
    <div className="detail-wrap">
      {blog ? (
        <div className="blog-wrap">
          <img src={blog.image} alt="" />
          <h2>{blog.name}</h2>
          <p>{blog.desc}</p>
        </div>
      ) : (
        "null"
      )}
      <Link
        to="/"
        style={{ color: "#000", textDecoration: "none", fontWeight: "600" }}
      >
        <ArrowBackIcon style={{ color: "#000", verticalAlign: "middle" }} />
        <span>Go to Shop</span>
      </Link>
    </div>
  );
};

export default Detail;
