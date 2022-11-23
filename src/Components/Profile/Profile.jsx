import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../Redux/Store";
import MyPostsContainer from "./MyPosts/MypostsContainer";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </div>
    )
}
export default Profile