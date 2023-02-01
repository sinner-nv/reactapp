import React from 'react'
import '../style/style.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import About from '../pages/About'
import PostsPage from '../pages/PostsPage'
import NotPages from '../pages/NotPages';
import HomePages from '../pages/HomePages';
import { Layout } from './Layout/Layout';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePages />} />
            <Route path='posts' element={<PostsPage />} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<NotPages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App