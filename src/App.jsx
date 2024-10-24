import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([])
  const handleBookmark = blog =>{
    const newBookMarks = [...bookmarks,blog]
    setBookmarks(newBookMarks)
  }
  return (
    <>
      <header>
      <Header></Header>
      </header>
      <main className='w-11/12 mx-auto grid grid-cols-3'>
        <div className='col-span-2'>
        <Blogs
        handleBookmark={handleBookmark}
        ></Blogs>
        </div>
        <Bookmarks
        bookmarks={bookmarks}
        ></Bookmarks>
      </main>
    </>
  )
}

export default App
