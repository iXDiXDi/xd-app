import React from "react";
import s from './../Dialogs.module.css'

const Message = (props) => {

    const newMessageElement = React.createRef();

    return (
        <div>
            <div>
                <div className={s.dialogs}>{props.message}</div>
            </div>
        </div>
    )
}

export default Message;