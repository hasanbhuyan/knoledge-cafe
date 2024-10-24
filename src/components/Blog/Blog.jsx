import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog,handleBookmark}) => {
    const {title,cover,author,author_img,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='mb-5 w-3/4 mx-auto'>
            <img className='rounded-lg w-full' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                    <div className='flex gap-3 items-center my-3'>
                       <img className='w-20 h-20 rounded-full object-cover ' src={author_img} alt="" />
                        <div>
                            <h3 className='text-xl font-medium'>{author}</h3>
                            <p>{posted_date}</p>
                        </div>
                    </div>
                <p className='flex gap-2 items-center'>{reading_time} min read <button onClick={()=>handleBookmark(blog)}><FaBookmark></FaBookmark></button></p>
            </div>
            <h2 className="text-4xl">{title}</h2>
            {
                hashtags.map((hash,idx) => <span className='me-3' key={idx}>{hash}</span>)
            }
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func
}
export default Blog;