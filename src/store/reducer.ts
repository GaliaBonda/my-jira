import { combineReducers } from 'redux';
import ticketReducer from './modules/tickets/reducer';
import userReducer from './modules/users/reducer';

export default combineReducers({
    ticket: ticketReducer,
    user: userReducer,
});