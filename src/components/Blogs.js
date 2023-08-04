import { useEffect, useState } from "react";
import blogs from "../data/blogs";
import "./Blogs.css";
import { Link } from "react-router-dom";
export default function Blogs() {
  const [search, setSearch] = useState("");
  const [filterBlogs, setFilterBlogs] = useState([])
  useEffect(()=>{
      const result = blogs.filter((blog)=>blog.title.includes(search))
      setFilterBlogs(result)
  },[search])
  return (
    <div className="blogs-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="ค้นหาบทความ"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <article>
        {filterBlogs.map((blog) => (
          <Link to={`/blog/${blog.id}`} key={blog.id}>
            <div className="card">
              <h2>{blog.title}</h2>
              <p>{blog.content.substring(0, 300)}</p>
              <hr />
            </div>
          </Link>
        ))}
      </article>
    </div>
  );
}
