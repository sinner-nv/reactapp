import React, { useEffect, useState } from 'react'
import Posts from '../components/Posts/Posts'
import CreatePost from '../components/CreatPost/CreatePost'
import SortAndSearch from '../components/SortAndSearch/SortAndSearch';
import '../style/style.css'
import SelfModal from '../components/UI/SelfModal/SelfModal';
import SelfButton from '../components/UI/SelfButton/SelfButton';
import { usePosts } from '../hooks/usePosts';
import { GetPostsJSONPlaceHolder } from '../API/getPosts';
import SelfLoading from '../components/UI/SelfLoading/SelfLoading';
import { getPageCount, getPgesPaginate } from '../utils/pages';
import PaginedPage from '../components/UI/PaginedPage/PaginedPage';


function PostsPage() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [visible, setVisible] = useState(false)
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
  const [isPostLoading, setisPostLoading] = useState(false)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    fetchPosts()
  }, [page])

  const fetchPosts = async () => {
    setLimit(10)
    setisPostLoading(true)
    const response = await GetPostsJSONPlaceHolder.getAll(limit, page)
    let postsJSON = response.data
    setPosts(postsJSON)
    let totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
    setisPostLoading(false)
  }

  const deletePost = (currentPost) => {
    setPosts(posts.filter(post => post.id !== currentPost.id))

  }

  const createPost = (post) => {
    let idPost = posts[posts.length - 1].id + 1
    let finishPost = { ...post, id: idPost, userId: 1 }
    setPosts([...posts, finishPost])
    setVisible(false)
  }

  const changePages = (p) => {
    setPage(p)
  }

  return (
    <div className='main'>
      <SelfModal visible={visible} setVisible={setVisible}>
        <div>
          <CreatePost createPost={createPost} />
        </div>
      </SelfModal>

      <div>
        <SelfButton namebutton='Создать пост' style={{ fontSize: "19px", padding: "9px" }} onClick={() => setVisible(true)} />
      </div>
      <div>
        <SortAndSearch
          value={filter}
          setFilter={setFilter}
        />
      </div>
      <div>
        {
          isPostLoading
            ? <SelfLoading />
            : <Posts posts={sortedAndSearchPosts} deletePost={deletePost} />
        }

      </div>
      <PaginedPage
        p={page}
        changePages={changePages}
        totalPages={getPgesPaginate(totalPages)}
      />
    </div>
  )
}

export default PostsPage