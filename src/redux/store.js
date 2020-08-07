import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import navigationReducer from "./navigation-reducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: `I'm doing great today!`, likesCount: 228 },
                { id: 2, message: `React is such a cool thing!`, likesCount: 322 },
                { id: 3, message: `It's my first React program!`, likesCount: 696 }
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        navigation: {}
    },
    _callSubscriber() {
        console.log('Changings')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.navigation = navigationReducer(this._state.navigation, action)

        this._callSubscriber(this._state)
    }
}

export default store
window.store = store