const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogs: [
        { id: 1, name: 'Ivan' },
        { id: 2, name: 'Lebowski' },
        { id: 3, name: 'Anna' },
        { id: 4, name: 'Andrey' },
        { id: 5, name: 'Egor Kreed' },
        { id: 6, name: 'Julius Caesar' },
        { id: 7, name: 'Donald Trump' },
        { id: 8, name: 'Elon Musk' }
    ],
    messages: [
        { id: 1, message: `Where's the Money, Lebowski?` },
        { id: 2, message: `Hello, how are your things going?` },
        { id: 3, message: `Hi!` }
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default dialogsReducer