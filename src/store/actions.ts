import { Dispatch } from 'redux';
import api from '../api/request';
import ITodo from '../common/interfaces/ITodo';
import IUser from '../common/interfaces/IUser';

export const thunkGetTickets = () => async (dispatch: Dispatch) => {
    try {
        const todos = await api.get<ITodo[]>('/todos');
        const users = await api.get<IUser[]>('/users');
        const colors: { [key: number]: string } = {};

        (users as unknown as IUser[]).forEach((item) => {
            colors[item.id] = `hsla(${Math.random() * 360}, 100%, 50%)`;
        });

        const tickets = (todos as unknown as ITodo[]).map((item) => {
            const userName = (users as unknown as IUser[]).find((user) => {
                return user.id === item.userId;
            });
            const ticket = {
                id: item.id,
                // status: item.completed ? 'done' : 'to do',
                status: 'to do',
                title: item.title,
                userId: item.userId,
                userName: {
                    name: userName?.name.split(' ')[0],
                    surname: userName?.name.split(' ')[1],
                },
                color: colors[item.userId],
            };
            return ticket;
        });

        dispatch({ type: 'UPDATE_TICKETS', payload: tickets });
    } catch (error) {
        console.error(error);
    }
}

// export const updateTicketStatus = (status: string, ticketId: number) => (dispatch: Dispatch) => {
//     dispatch({ type: 'UPDATE_TICKET_STATUS', payload: { status: status, id: ticketId } });
// }