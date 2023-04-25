import React from "react";
import BlogCard from "./BlogCard";
import blogService from "../services/blogService";

function BlogsList(props) {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    blogService.getAll().then((blog) => {
      setBlogs(blog);
      //console.log(classnames);
    });
  }, [blogs]);

  return (
    <>
      {" "}
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} token={props.token} />
      ))}
    </>
  );
}

export default BlogsList;
