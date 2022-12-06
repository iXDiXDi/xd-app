import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img height={400}
                     src="https://png.pngtree.com/background/20210712/original/pngtree-modern-double-color-futuristic-neon-background-picture-image_1181573.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + drscription
            </div>
        </div>
    )
}
export default ProfileInfo;