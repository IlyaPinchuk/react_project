import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import profileReducer from "../Profile/Redux/reducer.ts";
import dialogsReducer from "../Dialogs/Redux/reducer.ts";
import authReducer from "./auth-reducer.ts";
import usersReducer from "../Users/Redux/reducer";
import newsReducer from "../News/Redux/reducer";
import sidebarReducer from "../Navbar/Redux/reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    newsPage: newsReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store