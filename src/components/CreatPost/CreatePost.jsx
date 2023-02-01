import React, { useState } from 'react'
import cl from './CreatePost.module.css'
import SelfButton from '../UI/SelfButton/SelfButton'
import SelfInput from '../UI/SelfInput/SelfInput'
import SelfAreatext from '../UI/SelfAreatext/SelfAreatext'

function CreatePost(props) {
  const [post, setPost] = useState({ title: '', body: '' })

  let plcInput = 'Введите название поста...'
  let plcTextArea = 'Введите описание поста...'

  const crPostmiddle = () => {
    if (post.body === '' || post.title === '') {
      return console.log('ERROR')
    }
    props.createPost(post)
    setPost({ title: '', body: '' })
  }

  return (
    <>
      <div className={cl.beforeMain}>
        <div className={cl.mainForm}>
          <h1 className={cl.form}>Форма для создание поста</h1>
          <SelfInput
            value={post.title}
            onChange={e => setPost({ ...post, title: e.target.value })}
            placeholder={plcInput}
          />
          <SelfAreatext
            value={post.body}
            onChange={e => setPost({ ...post, body: e.target.value })}
            placeholder={plcTextArea}
          />
          <SelfButton
            onClick={crPostmiddle}
            namebutton='Создать'
          />
        </div>
      </div>
    </>
  )
}

export default CreatePost