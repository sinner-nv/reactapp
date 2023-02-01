import React from 'react'
import cs from './Post.module.css'
import SelfButton from '../UI/SelfButton/SelfButton'

function Post(props) {

    const getIdPostForDelete = (e) => {
        e.preventDefault()
        props.deletePost(props.post)
    }

    return (
        <div className={cs.post}>
            <div className={cs.titlePost}>
                <div className={cs.flexFroButtonDelete}>
                    <span> {props.idPost}. {props.titlePost}</span>
                    <div className={cs.btn}>
                        <SelfButton
                            namebutton='Удалить'
                            onClick={getIdPostForDelete}
                        />
                    </div>
                </div>
            </div>
            <div className={cs.bodyPost}>
                <span>{props.bodyPost}</span>
            </div>
            <div className={cs.footerPost}>
                <span >Пост: {props.idPost} Пользователь: {props.userId}</span>
            </div>
        </div>
    )
}

export default Post