import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let storeOld = {
    _state: {
        profilePage: {
            posts: [
                {id: 0, message: 'HiHiHi', likesCount: 12},
                {id: 1, message: 'YoYoyoyoyoyoYOYOYOYO', likesCount: 11},
                {id: 2, message: 'hihihsdhihihsdDsdasd', likesCount: 5},
                {id: 3, message: 'fgdfsghfghfdh', likesCount: 0},
                {id: 4, message: 'fgdfsghfghfdh', likesCount: 0},
            ],
            newPostText: 'what is it doing'

        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Yo'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Hi'},
                {id: 5, message: 'Fe'},
                {id: 6, message: 'FR'},
                {id: 7, message: 'sdg'},
                {id: 8, message: 'End8'},
            ],
            dialogs: [
                {id: 1, name: 'People1'},
                {id: 2, name: 'People2'},
                {id: 3, name: 'People3'},
                {id: 4, name: 'People4'},
                {id: 5, name: 'People5'},
                {id: 6, name: 'People6'},
                {id: 7, name: 'People7'},
                {id: 8, name: 'People8'},
            ],
            newMessageBody: ""
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }
}



export default storeOld;
window.store = storeOld;