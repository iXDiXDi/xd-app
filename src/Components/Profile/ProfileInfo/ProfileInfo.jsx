import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img height={400}
                     src="https://png.pngtree.com/background/20210712/original/pngtree-modern-double-color-futuristic-neon-background-picture-image_1181573.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + drscription
            </div>

        </div>
    )
}
export default ProfileInfo