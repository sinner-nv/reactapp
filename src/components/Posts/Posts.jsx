import React from 'react'
import uniqid from 'uniqid'
import Post from '../Post/Post'
import cs from './Posts.module.css'



function Posts(props) {

    if (!props.posts.length) {
        return (
            <h1>Посты не найдены!</h1>
        )
    }

    return (
        <div className={cs.postsList}>
            {props.posts.map((post, index) =>
                <Post
                    key={uniqid()}
                    post={post}
                    index={index}
                    titlePost={post.title}
                    bodyPost={post.body}
                    idPost={post.id}
                    userId={post.userId}
                    deletePost={props.deletePost}
                />
            )}
        </div>
    )
}

export default Posts