import ITicket from "../common/interfaces/ITicket";

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
            const { status } = action.payload;
            const { tickets } = state;
            if (!state.tickets || status === 'done') {
                return { ...state };
            }
            return {
                tickets: tickets?.map((item: ITicket) => {
                    if (item.id === action.payload.id) {
                        return action.payload.status === 'to do' ?
                            { ...item, status: 'in progress' } : { ...item, status: 'done' };
                    } else return item;
                }),
            }
        default: {
            return { ...state };
        }
    }
}