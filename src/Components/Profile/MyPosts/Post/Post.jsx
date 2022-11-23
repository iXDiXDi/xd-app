import React from "react";
import s from './Post.module.css'

const Post = (props) => {

    return (
        <div className={s.item}>
            <img
                src='https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2021/11/avatar-2536561.jpg?tf=1200x'/>
            {props.message}
            <div>
                <span>Like </span> {props.likesCount}
            </div>

        </div>
    )
}
export default Post;