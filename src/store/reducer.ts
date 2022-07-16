// import { combineReducers } from 'redux';
// import ticketReducer from './modules/tickets/reducer';
// import userReducer from './modules/users/reducer';

// export default combineReducers({
//     ticket: ticketReducer,
//     user: userReducer,
// });

const initialState = {tickets: []};

export default function reducer(state = initialState, action: {type: string, payload?: any}) {
    switch (action.type) {
        case 'UPDATE_TICKETS':
            return {
                ...state,
                tickets: action.payload,
            };
        default: {
            return {...state};
        }
    }
}