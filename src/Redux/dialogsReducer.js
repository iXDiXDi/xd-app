const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return{
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 7, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })



export default dialogsReducer;