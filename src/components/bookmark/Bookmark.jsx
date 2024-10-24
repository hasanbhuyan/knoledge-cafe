import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-200 p-4 m-2 rounded'>
            <h1>{title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    Bookmark:PropTypes.array
};

export default Bookmark;