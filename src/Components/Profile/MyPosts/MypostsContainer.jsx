import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./Myposts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();


    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return <MyPosts updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}/>
}
export default MyPostsContainer;