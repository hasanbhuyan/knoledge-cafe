import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import { PropTypes } from 'prop-types';

const Blogs = ({handleBookmark}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
            <h1 className="text-3xl mb-2">blogs {blogs.length}</h1>
            {
                blogs.map(blog =><Blog
                key={blog.id}
                blog={blog}
                handleBookmark={handleBookmark}
                ></Blog>)
                
            }
        </div>
    );
};
Blogs.propTypes= {
    handleBookmark: PropTypes.func
}
export default Blogs;