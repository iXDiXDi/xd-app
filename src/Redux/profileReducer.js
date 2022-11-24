const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'HiHiHi', likesCount: 12},
        {id: 2, message: 'YoYoyoyoyoyoYOYOYOYO', likesCount: 11},
        {id: 3, message: 'hihihsdhihihsdDsdasd', likesCount: 5},
        {id: 4, message: 'fgdfsghfghfdh', likesCount: 0},
    ],
    newPostText: 'what is it doing'

};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {

            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;