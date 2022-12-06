import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}
class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));



