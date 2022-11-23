import React from "react";
import store from "./Redux/reduxStore";

const StoreContext = React.createContext(null);

export const Provider = (props) => {

    return <StoreContext.provider value={props.store}>

        {props.children}

    </StoreContext.provider>

    }

export default StoreContext;