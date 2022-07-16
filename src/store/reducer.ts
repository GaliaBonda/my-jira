// import { combineReducers } from 'redux';
// import ticketReducer from './modules/tickets/reducer';
// import userReducer from './modules/users/reducer';

import ITicket from "../common/interfaces/ITicket";

// export default combineReducers({
//     ticket: ticketReducer,
//     user: userReducer,
// });

const initialState = {
    tickets: []
};

export default function reducer(state = initialState, action: { type: string, payload?: any }) {
    switch (action.type) {
        case 'UPDATE_TICKETS':
            return {
                ...state,
                tickets: action.payload,
            };
        case 'UPDATE_TICKET_STATUS':
            if (!state.tickets || action.payload.status === 'done') {
                return { ...state };
            }
            console.log(state.tickets);

            let updatedTickets: ITicket[] = state.tickets.map((item: ITicket) => {
                if (item.id === action.payload.id) {
                    return action.payload.status === 'todo' ?
                        { ...item, status: 'inprogress' } : { ...item, status: 'done' };
                } else return item;
            });

            return { tickets: updatedTickets };
        default: {
            return { ...state };
        }
    }
}